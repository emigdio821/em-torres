'use client'

import { RiMusicLine } from '@remixicon/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import type { SimplifiedTrack } from '@/types'
import { BlurImage } from './blur-image'

export function SpotifyActivity() {
  async function getSpotifyActivity() {
    const { data } = await axios.get<SimplifiedTrack | null>('/api/spotify')
    return data
  }

  const { data, isLoading, error } = useQuery({
    queryFn: getSpotifyActivity,
    queryKey: ['spotify-activity'],
  })

  return (
    <>
      <div>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Skeleton className="size-11 rounded-sm shadow-xs" />
            <div className="flex flex-col gap-1">
              <Skeleton className="mt-3 h-1 w-24 rounded-md" />
              <Skeleton className="my-3 h-1 w-28 rounded-md" />
            </div>
          </div>
        ) : (
          <div className="flex gap-2 sm:flex-row sm:items-center">
            <div className="bg-muted flex size-11 shrink-0 items-center justify-center rounded-sm shadow-xs">
              {data?.album_img_url ? (
                data.href ? (
                  <Button
                    variant="link"
                    className="size-[inherit] rounded-[inherit]"
                    render={
                      <a href={data.href} target="_blank" rel="noreferrer">
                        <BlurImage src={data.album_img_url} alt="Song cover" />
                      </a>
                    }
                  />
                ) : (
                  <BlurImage src={data.album_img_url} alt="Song cover" />
                )
              ) : (
                <RiMusicLine className="size-4" />
              )}
            </div>

            <div className="min-w-0 text-sm">
              <p className="truncate font-medium">{data?.name || 'Spotify'}</p>
              <p className="text-muted-foreground truncate">{`by ${data?.artist || 'No one'}`}</p>
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-destructive text-xs">{error.message}</p>}
    </>
  )
}
