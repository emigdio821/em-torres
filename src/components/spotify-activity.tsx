'use client'

import { RiMusicLine } from '@remixicon/react'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import type { SimplifiedTrack } from '@/types'
import { BlurImage } from './blur-image'

export function SpotifyActivity() {
  async function getSpotifyActivity() {
    const response = await fetch('/api/spotify')
    if (!response.ok) throw new Error('Unable to fetch Spotify activity')
    return (await response.json()) as SimplifiedTrack | null
  }

  const { data, isLoading, error } = useQuery({
    queryFn: getSpotifyActivity,
    queryKey: ['spotify-activity'],
  })

  return (
    <>
      <div>
        {isLoading ? (
          <div className="flex gap-2 sm:flex-row sm:items-center">
            <Skeleton className="bg-muted flex size-11 shrink-0 items-center justify-center rounded-sm shadow-xs" />

            <div className="flex flex-col gap-3">
              <Skeleton className="h-2 w-20" />
              <Skeleton className="h-2 w-24" />
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
              <p className="text-muted-foreground truncate">
                {data?.artist ? `by ${data?.artist}` : 'No data available'}
              </p>
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-destructive text-xs">{error.message}</p>}
    </>
  )
}
