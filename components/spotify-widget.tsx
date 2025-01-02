'use client'

import type { SpotiResponse } from '@/types'
import { IconMusic, IconRefresh } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Equalizer } from '@/components/equalizer'
import { SongDetailsDialog } from './song-details-dialog'
import { Button } from './ui/button'

export function SpotifyWidget() {
  async function getCurrentPlayingSong() {
    try {
      const { data } = await axios.get<SpotiResponse>('/api/spotify')

      return data
    } catch (err) {
      const errTitle = 'Unable to fetch Spotify status:'
      if (err instanceof AxiosError) {
        console.log(errTitle, err.message)
      } else {
        console.log(errTitle, err)
      }
    }
  }

  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ['current-playing'],
    queryFn: getCurrentPlayingSong,
  })
  const isPlaying = data?.isPlaying

  return (
    <>
      <div className="flex items-center gap-4">
        {isPlaying ? (
          <SongDetailsDialog data={data} />
        ) : (
          <div
            className={cn('flex size-20 items-center justify-center rounded-md bg-muted', {
              'animate-pulse': isLoading,
            })}
          >
            <IconMusic className="size-4" />
          </div>
        )}
        <div className="flex w-full flex-1 flex-col items-start gap-1 sm:w-80">
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger
                onClick={() => {
                  void refetch()
                }}
                asChild
              >
                <Button variant="unstyled" className="hover:text-muted-foreground">
                  <IconRefresh
                    className={cn('size-4', {
                      'animate-pulse': isLoading,
                    })}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Refresh song data</TooltipContent>
            </Tooltip>
            {isPlaying ? <Equalizer /> : null}
          </div>
          {isPlaying ? (
            <AnimatePresence mode="wait" key={data.albumImageUrl || ''}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col">
                <span className="line-clamp-2 font-semibold">{data.title}</span>
                <span className="line-clamp-2">{data.artist}</span>
              </motion.div>
            </AnimatePresence>
          ) : (
            <>
              {isLoading ? (
                <div className="flex flex-col gap-1">
                  <Skeleton className="mt-3 h-2 w-24 rounded-md" />
                  <Skeleton className="my-2 h-2 w-28 rounded-md" />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-semibold">Spotify</span>
                  <span>No song playing</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {error ? <p className="mt-2 text-xs text-red-500 dark:text-red-400">{error.message}</p> : null}
    </>
  )
}
