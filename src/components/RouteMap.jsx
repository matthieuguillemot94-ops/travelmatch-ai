import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

function pinIcon(color, label) {
  return L.divIcon({
    className: '',
    html: `<div style="position:relative;width:30px;height:38px;">
      <svg width="30" height="38" viewBox="0 0 30 38" style="filter:drop-shadow(0 2px 4px rgba(18,33,29,.35))">
        <path d="M15 1C7.8 1 2 6.8 2 14c0 9.5 11 21.5 12.3 22.9.4.4 1 .4 1.4 0C17 35.5 28 23.5 28 14 28 6.8 22.2 1 15 1Z" fill="${color}" stroke="#fff" stroke-width="1.6"/>
        <circle cx="15" cy="14" r="5.5" fill="#fff"/>
      </svg>
      <span style="position:absolute;top:6px;left:0;width:30px;text-align:center;font-size:10px;font-weight:700;color:${color};font-family:-apple-system,sans-serif;">${label}</span>
    </div>`,
    iconSize: [30, 38],
    iconAnchor: [15, 36],
  })
}

const originIcon = pinIcon('#2F5D50', 'A')
const destIcon = pinIcon('#B5495B', 'B')

export default function RouteMap({ origin, destination, className = '' }) {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!containerRef.current || !origin || !destination) return
    let cancelled = false
    setStatus('loading')

    const map = L.map(containerRef.current, { zoomControl: false, attributionControl: false })
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map)
    L.marker([origin.lat, origin.lon], { icon: originIcon }).addTo(map)
    L.marker([destination.lat, destination.lon], { icon: destIcon }).addTo(map)
    map.fitBounds([[origin.lat, origin.lon], [destination.lat, destination.lon]], { padding: [36, 36] })

    fetch(
      `https://router.project-osrm.org/route/v1/driving/${origin.lon},${origin.lat};${destination.lon},${destination.lat}?overview=full&geometries=geojson`
    )
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return
        const coords = data.routes?.[0]?.geometry?.coordinates
        if (!coords) {
          setStatus('error')
          return
        }
        const latlngs = coords.map(([lon, lat]) => [lat, lon])
        L.polyline(latlngs, { color: '#fff', weight: 8, opacity: 0.9, lineCap: 'round', lineJoin: 'round' }).addTo(map)
        const line = L.polyline(latlngs, {
          color: '#4A7DFF',
          weight: 5,
          opacity: 0.95,
          lineCap: 'round',
          lineJoin: 'round',
        }).addTo(map)
        map.fitBounds(line.getBounds(), { padding: [36, 36] })
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
      map.remove()
    }
  }, [origin?.lat, origin?.lon, destination?.lat, destination?.lon])

  return (
    <div className={`relative ${className}`}>
      <div ref={containerRef} className="w-full h-full" />
      {status === 'loading' && (
        <div className="absolute inset-0 bg-ink/[0.04] animate-pulse" />
      )}
      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-paper/90 text-[11.5px] text-stone px-4 text-center">
          Itinéraire indisponible pour le moment
        </div>
      )}
    </div>
  )
}
