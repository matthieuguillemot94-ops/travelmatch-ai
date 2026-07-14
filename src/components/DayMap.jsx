import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const typeColor = { stay: '#2F5D50', walk: '#4FA98A', food: '#B5495B', activity: '#D9A55C', rest: '#4FA98A' }

// Generic template items (Google Maps search links) don't point at one exact
// venue, so instead of geocoding the vague label we look up a real nearby
// OSM point of interest matching the activity's category.
const CATEGORY_TAGS = {
  food: ['amenity=restaurant', 'amenity=cafe'],
  activity: ['tourism=museum', 'tourism=attraction', 'historic=monument'],
  walk: ['tourism=viewpoint', 'leisure=park'],
  rest: ['leisure=park', 'natural=beach'],
}

function hashString(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h
}

const nominatimCache = new Map()
const overpassCache = new Map()

async function geocodeLabel(query) {
  if (nominatimCache.has(query)) return nominatimCache.get(query)
  const promise = fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`)
    .then((r) => r.json())
    .then((data) => (data[0] ? { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon), name: data[0].display_name?.split(',')[0] } : null))
    .catch(() => null)
  nominatimCache.set(query, promise)
  return promise
}

async function overpassPOIs(lat, lon, tag) {
  const key = `${tag}@${lat.toFixed(2)},${lon.toFixed(2)}`
  if (overpassCache.has(key)) return overpassCache.get(key)
  const query = `[out:json][timeout:15];node(around:4500,${lat},${lon})[${tag}];out body 15;`
  const promise = fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: query })
    .then((r) => r.json())
    .then((data) => (data.elements || []).filter((e) => e.tags?.name).map((e) => ({ lat: e.lat, lon: e.lon, name: e.tags.name })))
    .catch(() => [])
  overpassCache.set(key, promise)
  return promise
}

function isCuratedLink(url) {
  return !!url && !url.startsWith('https://www.google.com/maps/search/')
}

async function resolvePoint(item, city, cityCoords) {
  if (isCuratedLink(item.url)) {
    const pos = await geocodeLabel(`${item.label}, ${city}`)
    return pos || cityCoords
  }
  if (/aéroport/i.test(item.label)) return (await geocodeLabel(`aéroport ${city}`)) || cityCoords
  if (/gare/i.test(item.label)) return (await geocodeLabel(`gare ${city}`)) || cityCoords
  if (!item.url || !cityCoords) return cityCoords

  const tags = CATEGORY_TAGS[item.type]
  if (!tags || !cityCoords) return cityCoords
  const tag = tags[hashString(item.label) % tags.length]
  const pois = await overpassPOIs(cityCoords.lat, cityCoords.lon, tag)
  if (!pois.length) return cityCoords
  return pois[hashString(item.label + item.time) % pois.length]
}

function numberIcon(n, color) {
  return L.divIcon({
    className: '',
    html: `<div style="position:relative;width:26px;height:34px;">
      <svg width="26" height="34" viewBox="0 0 26 34" style="filter:drop-shadow(0 2px 4px rgba(18,33,29,.35))">
        <path d="M13 1C6.4 1 1 6.4 1 13c0 8.5 9.6 19 10.8 20.3.6.6 1.4.6 2 0C14.9 32 25 21.5 25 13 25 6.4 19.6 1 13 1Z" fill="${color}" stroke="#fff" stroke-width="1.5"/>
        <circle cx="13" cy="13" r="8.5" fill="#fff"/>
      </svg>
      <span style="position:absolute;top:5px;left:0;width:26px;text-align:center;font-size:11px;font-weight:700;color:${color};font-family:-apple-system,sans-serif;">${n}</span>
    </div>`,
    iconSize: [26, 34],
    iconAnchor: [13, 32],
  })
}

export default function DayMap({ city, items, cityCoords, dayKey, className = '' }) {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!containerRef.current) return
    let cancelled = false
    setStatus('loading')

    const map = L.map(containerRef.current, { zoomControl: false, attributionControl: false })
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map)
    if (cityCoords) map.setView([cityCoords.lat, cityCoords.lon], 12)

    async function run() {
      const results = await Promise.all(items.map((item) => resolvePoint(item, city, cityCoords)))
      if (cancelled) return
      const points = results
        .map((pos, index) => (pos ? { ...pos, item: items[index], index } : null))
        .filter(Boolean)
      if (!points.length) {
        setStatus('error')
        return
      }
      points.forEach((p) => {
        const marker = L.marker([p.lat, p.lon], { icon: numberIcon(p.index + 1, typeColor[p.item.type] || '#2F5D50') }).addTo(map)
        const realName = p.name && p.name !== p.item.label ? `<div style="color:#8C8574;margin-top:2px;">${p.name}</div>` : ''
        marker.bindPopup(`<div style="font:500 12.5px -apple-system,sans-serif;color:#12211D;">${p.item.time} · ${p.item.label}${realName}</div>`, { closeButton: false })
      })
      if (points.length > 1) {
        const latlngs = points.map((p) => [p.lat, p.lon])
        L.polyline(latlngs, { color: '#fff', weight: 6, opacity: 0.85, lineCap: 'round', lineJoin: 'round', dashArray: '1 9' }).addTo(map)
        const line = L.polyline(latlngs, { color: '#2F5D50', weight: 2.5, opacity: 0.7, lineCap: 'round', lineJoin: 'round', dashArray: '1 9' }).addTo(map)
        map.fitBounds(line.getBounds(), { padding: [32, 32] })
      } else {
        map.setView([points[0].lat, points[0].lon], 14)
      }
      setStatus('ready')
    }
    run()

    return () => {
      cancelled = true
      map.remove()
    }
  }, [dayKey])

  return (
    <div className={`relative ${className}`}>
      <div ref={containerRef} className="w-full h-full" />
      {status === 'loading' && <div className="absolute inset-0 bg-ink/[0.04] animate-pulse" />}
      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-paper/90 text-[11.5px] text-stone px-4 text-center">
          Carte indisponible pour le moment
        </div>
      )}
    </div>
  )
}
