'use client'

import type { SpotiResponse } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import { BiLogoSpotify } from 'react-icons/bi'
import { LuArrowUpRight, LuMusic2 } from 'react-icons/lu'
import useSWR, { type Fetcher } from 'swr'

import { cn } from '@/lib/utils'

import { AudioFeatsChart } from './audio-feats-chart'
import { BlurImage } from './blur-image'
import { Equalizer } from './equalizer'
import { Button, buttonVariants } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Skeleton } from './ui/skeleton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

export default function SpotiWidget() {
  const fetcher: Fetcher<SpotiResponse> = async (url: string) => {
    return await fetch(url).then(async (r) => await r.json())
  }
  const { data, mutate, error, isLoading } = useSWR('/api/spotify', fetcher)
  const isPlaying = data?.isPlaying

  return (
    <>
      <div className="flex items-center gap-4">
        {isPlaying ? (
          <Dialog>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <DialogTrigger asChild>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      className="group h-auto rounded-md bg-transparent p-0 hover:bg-transparent"
                    >
                      <AnimatePresence mode="wait" key={isPlaying ? data.albumImageUrl : ''}>
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                          <div className="relative h-20 w-20 overflow-hidden rounded-md bg-transparent shadow-md transition-all group-hover:brightness-75 group-focus-visible:brightness-75">
                            <BlurImage src={data.albumImageUrl} alt="Album" priority />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </Button>
                  </TooltipTrigger>
                </DialogTrigger>
                <TooltipContent side="bottom">
                  <span>Song details</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DialogContent
              onInteractOutside={(e) => {
                e.preventDefault()
              }}
            >
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-bold">Song details</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
                <div className="relative h-32 w-32 overflow-hidden rounded-md bg-transparent shadow-md sm:h-40 sm:w-40 sm:min-w-[10rem]">
                  <BlurImage src={data.albumImageUrl} alt="Album" priority />
                </div>
                <p className="flex flex-col text-center sm:text-left">
                  <span className="line-clamp-2 text-lg font-bold">{data.title}</span>
                  <span className="line-clamp-2 font-semibold">{data.artist}</span>
                  <span className="text-sm opacity-80">
                    {data.album} · {new Date(data.albumReleaseDate).getFullYear()}
                  </span>
                  <span className="text-sm opacity-80">Popularity · {data.popularity}%</span>
                  <a
                    target="_blank"
                    href={data.songUrl}
                    className={cn(
                      buttonVariants({ variant: 'secondary', size: 'sm' }),
                      'mt-2 h-8 text-xs sm:h-9 sm:text-sm',
                    )}
                  >
                    Play on Spotify
                    <LuArrowUpRight className="ml-2" />
                  </a>
                </p>
              </div>
              <div className="h-64 w-full sm:h-80">
                <AudioFeatsChart data={data} />
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <div
            className={cn(
              'flex h-20 w-20 min-w-[5rem] items-center justify-center rounded-md bg-zinc-800 text-sm transition-all group-hover:brightness-75 group-focus-visible:brightness-75',
              {
                'animate-pulse': isLoading,
              },
            )}
          >
            <LuMusic2 className="text-white" />
          </div>
        )}
        <div className="flex w-full flex-col items-start gap-1 sm:w-80">
          <div className="flex items-center gap-2">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  onClick={() => {
                    void mutate()
                  }}
                  className="rounded-full outline-none transition-opacity hover:opacity-80 focus-visible:opacity-80 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <BiLogoSpotify
                    size={20}
                    className={cn({
                      'animate-pulse': isLoading,
                    })}
                  />
                </TooltipTrigger>
                <TooltipContent side="top">
                  <span>Refresh song data</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {isPlaying ? <Equalizer /> : null}
          </div>
          {isPlaying ? (
            <AnimatePresence mode="wait" key={isPlaying ? data.albumImageUrl : ''}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col"
              >
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
      {error ? <p className="mt-2 text-xs text-red-500 dark:text-red-400">{error}</p> : null}
    </>
  )
}
