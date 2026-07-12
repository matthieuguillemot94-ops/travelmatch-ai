import { WORLD_MAP_SVG } from '../data/mockData.js'

export default function WorldMap({ visitedCountries = [], className = '' }) {
  const css = visitedCountries.map((code) => `.landxx.${code}{fill:#4FA98A}`).join('')
  const idx = WORLD_MAP_SVG.indexOf('>')
  const svg = `${WORLD_MAP_SVG.slice(0, idx + 1)}<style>${css}</style>${WORLD_MAP_SVG.slice(idx + 1)}`

  return <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />
}
