export function googleMapsDirectionsUrl(points, mode = 'walking') {
  if (points.length < 2) return `https://www.google.com/maps/search/?api=1&query=${points[0].lat},${points[0].lon}`
  const origin = points[0]
  const destination = points[points.length - 1]
  const waypoints = points
    .slice(1, -1)
    .map((p) => `${p.lat},${p.lon}`)
    .join('|')
  const params = new URLSearchParams({
    api: '1',
    origin: `${origin.lat},${origin.lon}`,
    destination: `${destination.lat},${destination.lon}`,
    travelmode: mode,
  })
  if (waypoints) params.set('waypoints', waypoints)
  return `https://www.google.com/maps/dir/?${params.toString()}`
}

export function appleMapsDirectionsUrl(points, mode = 'w') {
  if (points.length < 2) return `https://maps.apple.com/?ll=${points[0].lat},${points[0].lon}&q=${encodeURIComponent(points[0].name || '')}`
  const origin = points[0]
  const destination = points[points.length - 1]
  return `https://maps.apple.com/?saddr=${origin.lat},${origin.lon}&daddr=${destination.lat},${destination.lon}&dirflg=${mode}`
}
