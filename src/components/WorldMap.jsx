import { useEffect, useRef, useState } from 'react'
import { WORLD_MAP_SVG, COUNTRIES } from '../data/mockData.js'
import Icon from './Icon.jsx'

const VALID_CODES = new Set(COUNTRIES.map((c) => c.code))
const MIN_SCALE = 1
const MAX_SCALE = 4
const DRAG_THRESHOLD = 5

export default function WorldMap({ visitedCountries = [], onToggleCountry, className = '' }) {
  const viewportRef = useRef(null)
  const mapRef = useRef(null)
  const dragRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })

  const css = visitedCountries.map((code) => `.landxx.${code}{fill:#4FA98A}`).join('')
  const idx = WORLD_MAP_SVG.indexOf('>')
  const svg = `${WORLD_MAP_SVG.slice(0, idx + 1)}<style>${css}</style>${WORLD_MAP_SVG.slice(idx + 1)}`

  const clamp = (x, y, s) => {
    const rect = viewportRef.current?.getBoundingClientRect()
    if (!rect) return { x: 0, y: 0 }
    const maxX = (rect.width * (s - 1)) / 2
    const maxY = (rect.height * (s - 1)) / 2
    return { x: Math.min(maxX, Math.max(-maxX, x)), y: Math.min(maxY, Math.max(-maxY, y)) }
  }

  const zoomIn = () => setScale((s) => Math.min(MAX_SCALE, +(s + 1).toFixed(2)))
  const zoomOut = () =>
    setScale((s) => {
      const next = Math.max(MIN_SCALE, +(s - 1).toFixed(2))
      setPan((p) => clamp(p.x, p.y, next))
      return next
    })

  // The map's innerHTML comes from dangerouslySetInnerHTML, so its nodes
  // are plain DOM (no React fiber) — React's synthetic event delegation
  // doesn't reliably bridge into that subtree. Native listeners on the
  // container sidestep it entirely.
  useEffect(() => {
    const el = mapRef.current
    if (!el) return

    const onDown = (e) => {
      dragRef.current = { startX: e.clientX, startY: e.clientY, originX: pan.x, originY: pan.y, moved: false }
    }
    const onMove = (e) => {
      if (!dragRef.current || scale === MIN_SCALE) return
      const dx = e.clientX - dragRef.current.startX
      const dy = e.clientY - dragRef.current.startY
      if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) dragRef.current.moved = true
      setPan(clamp(dragRef.current.originX + dx, dragRef.current.originY + dy, scale))
    }
    const onUp = (e) => {
      const wasDrag = dragRef.current?.moved
      dragRef.current = null
      if (wasDrag || !onToggleCountry) return
      const target = e.target.closest?.('.landxx')
      if (!target) return
      const code = [...target.classList].find((c) => VALID_CODES.has(c))
      if (code) onToggleCountry(code)
    }
    const onLeave = () => {
      dragRef.current = null
    }

    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [scale, pan, onToggleCountry])

  return (
    <div ref={viewportRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={mapRef}
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
          transformOrigin: 'center center',
          transition: dragRef.current ? 'none' : 'transform .2s',
          cursor: scale > MIN_SCALE ? 'grab' : 'pointer',
          touchAction: 'none',
        }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <div className="absolute bottom-2 right-2 flex flex-col rounded-xl overflow-hidden border border-ink/10 shadow-card">
        <button
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          className="w-8 h-8 bg-white flex items-center justify-center disabled:opacity-30 border-b border-ink/10"
        >
          <Icon name="plus" className="w-3.5 h-3.5 text-ink" strokeWidth={2.2} />
        </button>
        <button onClick={zoomOut} disabled={scale <= MIN_SCALE} className="w-8 h-8 bg-white flex items-center justify-center disabled:opacity-30">
          <Icon name="minus" className="w-3.5 h-3.5 text-ink" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  )
}
