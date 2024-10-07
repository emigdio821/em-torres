'use client'

import type { AudioFeats } from '@/types'
import {
  IconBolt,
  IconDeviceSpeaker,
  IconHeadphones,
  IconMicrophone2,
  IconMoodSmile,
  IconMusic,
  IconMusicBolt,
} from '@tabler/icons-react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip, type TooltipProps } from 'recharts'

interface AudioFeatsChartProps {
  data: AudioFeats
}

const featuresToShow = [
  'danceability',
  'energy',
  'instrumentalness',
  'speechiness',
  'valence',
  'acousticness',
  'liveness',
]

const featsIcons = {
  danceability: IconDeviceSpeaker,
  energy: IconBolt,
  instrumentalness: IconMusic,
  speechiness: IconMicrophone2,
  valence: IconMoodSmile,
  acousticness: IconHeadphones,
  liveness: IconMusicBolt,
}

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (active && payload?.length) {
    const key = label as keyof typeof featsIcons
    const Icon = featsIcons[key]
    return (
      <div className="rounded-md border bg-popover px-3 py-1.5 text-sm shadow-md">
        <p className="flex flex-col items-center justify-center">
          <Icon className="mb-1 size-4" />
          <span className="font-medium capitalize">{label}</span>
          <span className="font-semibold">{payload[0].value}%</span>
        </p>
      </div>
    )
  }

  return null
}

export function AudioFeatsChart({ data }: AudioFeatsChartProps) {
  const chartData = Object.entries(data)
    .filter(([key, _]) => featuresToShow.includes(key))
    .map(([key, value]) => ({
      name: key,
      value: Math.round(Number(value) * 100),
    }))
  const isDarkTheme = document.documentElement.classList.contains('dark')

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid strokeOpacity={isDarkTheme ? 0.1 : 0.5} />
        <PolarAngleAxis
          dataKey="name"
          fontSize={12}
          stroke="currentColor"
          fill="currentColor"
          fillOpacity={0.8}
          tickLine={false}
          axisLine={false}
          style={{ textTransform: 'capitalize', fontWeight: 500 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Radar dataKey="value" stroke="#1DB954" fill="#1DB954" fillOpacity={0.5} animationDuration={0} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
