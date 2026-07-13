import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const markerIcon = L.divIcon({
  className: '',
  html: '<div style="width:11px;height:11px;border-radius:999px;background:#2F5D50;border:2px solid #fff;box-shadow:0 0 0 1px rgba(18,33,29,.2)"></div>',
  iconSize: [11, 11],
  iconAnchor: [5.5, 5.5],
})

export default function RouteMap({ origin, destination, className = '' }) {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!containerRef.current || !origin || !destination) return
    let cancelled = false
    setStatus('loading')

    const map = L.map(containerRef.current, { zoomControl: false, attributionControl: false })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map)
    L.marker([origin.lat, origin.lon], { icon: markerIcon }).addTo(map)
    L.marker([destination.lat, destination.lon], { icon: markerIcon }).addTo(map)
    map.fitBounds([[origin.lat, origin.lon], [destination.lat, destination.lon]], { padding: [28, 28] })

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
        const line = L.polyline(latlngs, { color: '#2F5D50', weight: 4, opacity: 0.85 }).addTo(map)
        map.fitBounds(line.getBounds(), { padding: [28, 28] })
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
      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-paper/90 text-[11.5px] text-stone px-4 text-center">
          Itinéraire indisponible pour le moment
        </div>
      )}
    </div>
  )
}
