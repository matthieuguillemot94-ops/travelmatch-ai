import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

const WEATHER_CODE_MAP = {
  0: { label: 'Ciel dégagé', icon: 'sun' },
  1: { label: 'Plutôt dégagé', icon: 'sun' },
  2: { label: 'Partiellement nuageux', icon: 'cloud' },
  3: { label: 'Couvert', icon: 'cloud' },
  45: { label: 'Brouillard', icon: 'fog' },
  48: { label: 'Brouillard givrant', icon: 'fog' },
  51: { label: 'Bruine légère', icon: 'cloudRain' },
  53: { label: 'Bruine', icon: 'cloudRain' },
  55: { label: 'Bruine forte', icon: 'cloudRain' },
  56: { label: 'Bruine verglaçante', icon: 'cloudRain' },
  57: { label: 'Bruine verglaçante forte', icon: 'cloudRain' },
  61: { label: 'Pluie légère', icon: 'cloudRain' },
  63: { label: 'Pluie', icon: 'cloudRain' },
  65: { label: 'Pluie forte', icon: 'cloudRain' },
  66: { label: 'Pluie verglaçante', icon: 'cloudRain' },
  67: { label: 'Pluie verglaçante forte', icon: 'cloudRain' },
  71: { label: 'Neige légère', icon: 'snow' },
  73: { label: 'Neige', icon: 'snow' },
  75: { label: 'Neige forte', icon: 'snow' },
  77: { label: 'Neige en grains', icon: 'snow' },
  80: { label: 'Averses légères', icon: 'cloudRain' },
  81: { label: 'Averses', icon: 'cloudRain' },
  82: { label: 'Averses violentes', icon: 'cloudRain' },
  85: { label: 'Averses de neige', icon: 'snow' },
  86: { label: 'Averses de neige fortes', icon: 'snow' },
  95: { label: 'Orage', icon: 'bolt' },
  96: { label: 'Orage avec grêle', icon: 'bolt' },
  99: { label: 'Orage violent', icon: 'bolt' },
}

function describeCode(code) {
  return WEATHER_CODE_MAP[code] || { label: 'Conditions variables', icon: 'cloud' }
}

const cache = new Map()

export default function LiveWeather({ coords }) {
  const [status, setStatus] = useState('loading')
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!coords) {
      setStatus('error')
      return
    }
    const key = `${coords.lat.toFixed(2)},${coords.lon.toFixed(2)}`
    let cancelled = false
    if (cache.has(key)) {
      setData(cache.get(key))
      setStatus('ready')
      return
    }
    setStatus('loading')
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
    )
      .then((r) => r.json())
      .then((json) => {
        if (cancelled) return
        if (!json.current) {
          setStatus('error')
          return
        }
        cache.set(key, json.current)
        setData(json.current)
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [coords?.lat, coords?.lon])

  if (status === 'loading') {
    return <div className="h-5 w-40 rounded-full bg-ink/[0.06] animate-pulse" />
  }
  if (status === 'error' || !data) {
    return <p className="text-[11.5px] text-stone">Météo en direct indisponible pour le moment.</p>
  }

  const info = describeCode(data.weather_code)
  return (
    <div className="flex items-center gap-2 flex-wrap text-[12.5px] text-ink/80">
      <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-mint bg-mint-100 px-2 py-0.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-mint inline-block" />
        En direct
      </span>
      <span className="flex items-center gap-1 font-medium text-ink">
        <Icon name={info.icon} className="w-4 h-4 text-pine" />
        {Math.round(data.temperature_2m)}°C
      </span>
      <span>{info.label}</span>
      <span className="text-stone">· ressenti {Math.round(data.apparent_temperature)}°C</span>
      <span className="text-stone">· vent {Math.round(data.wind_speed_10m)} km/h</span>
    </div>
  )
}
