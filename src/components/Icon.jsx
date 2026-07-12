// A small hand-picked line-icon set (single stroke, 1.6px) so the app has
// one consistent icon voice instead of mixing in emoji or a generic icon font.

const paths = {
  leaf: 'M5 19c8-1 13-6 14-14-8 1-13 6-14 14Zm0 0c0-4 1.5-7 4-9',
  fork: 'M8 3v6a2 2 0 0 0 4 0V3M10 9v12M16 3c-1.5 1.5-1.5 5 0 6.5V21',
  column: 'M4 20h16M5 20V9l7-5 7 5v11M9 20v-7M15 20v-7',
  moon: 'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z',
  drop: 'M12 3c3 4 6 8.5 6 12a6 6 0 1 1-12 0c0-3.5 3-8 6-12Z',
  peak: 'M3 19h18L14.5 7 11 13 8.5 9.5 3 19Z',
  wave: 'M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0',
  thread: 'M4 6c4 0 4 4 8 4s4-4 8-4M4 12c4 0 4 4 8 4s4-4 8-4M4 18c4 0 4 2 8 2s4-2 8-2',
  scroll: 'M6 4h10a3 3 0 0 1 3 3v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Zm0 0a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2',
  aperture: 'M12 3v6M12 15v6M4.2 7l5.2 3M14.6 14l5.2 3M4.2 17l5.2-3M14.6 10l5.2-3M12 12h.01',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3-13-4 3-3 6 4-3 3-6Z',
  route: 'M5 19c3 0 3-4 6-4s3 4 6 4M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 7v3c0 2 1 3 3 3M18 11v3c0 2-1 3-3 3',
  sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 9 .8 2.2L22 15l-2.2.8L19 18l-.8-2.2L16 15l2.2-.8L19 12Z',
  suitcase: 'M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Zm5 0V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 13h16',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c1.5-4 4-6 7-6s5.5 2 7 6',
  'arrow-left': 'M19 12H5m0 0 6-6m-6 6 6 6',
  'arrow-right': 'M5 12h14m0 0-6-6m6 6-6 6',
  check: 'M4 12.5 9 17l11-11',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  moonStars: 'M14.5 3a7 7 0 1 0 6.5 9.5A7 7 0 0 1 14.5 3ZM19 3.5l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6.6-1.5Z',
  star: 'M12 3.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.7L12 3.5Z',
  pin: 'M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 0 1 18.5 10c0 4.9-6.5 11-6.5 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2',
  coin: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v10M9.5 9.5c0-1 1-1.8 2.5-1.8s2.5.8 2.5 1.8-1 1.5-2.5 1.5-2.5.6-2.5 1.6 1 1.9 2.5 1.9 2.5-.7 2.5-1.7',
  send: 'M4 12 20 4l-6 16-3-7-7-1Z',
  chevronDown: 'M6 9l6 6 6-6',
  chevronRight: 'M9 6l6 6-6 6',
  edit: 'M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3Zm11-14 3 3',
  bell: 'M6 10a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10Zm4.5 9.5a1.8 1.8 0 0 0 3 0',
  shield: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z',
  logout: 'M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 8l-4 4 4 4M6 12h12',
  camera: 'M4 8h3l1.5-2h7L17 8h3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Zm8 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
}

export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.6 }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
