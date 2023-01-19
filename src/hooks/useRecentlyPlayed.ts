import { useEffect, useState } from 'react'
import { getRecentlyPlayed } from 'lib/spotify'

interface RecentlyPlayedState {
  error?: string
  song?: {
    album: {
      images: {
        url: string
      }[]
    }
    name: string
    artists: {
      name: string
    }[]
  }
}

const initialState: RecentlyPlayedState = {}

export default function useRecentlyPlayed() {
  const [playing, setPlaying] = useState<RecentlyPlayedState>(initialState)

  useEffect(() => {
    const recentlyPlayed = async () => {
      const response = await getRecentlyPlayed()
      if (response.status === 204 || response.status > 400) {
        setPlaying(initialState)
      } else {
        const res = await response.json()

        if (res.error) {
          setPlaying({ error: res.error.message })
        } else if (res.item !== null) {
          setPlaying({ song: res.items[0].track })
        } else {
          setPlaying(initialState)
        }
      }
    }
    recentlyPlayed()
  }, [])

  return playing
}
