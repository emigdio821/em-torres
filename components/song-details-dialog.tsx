import type { SpotiResponse } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import { LuArrowUpRight } from 'react-icons/lu'

import { cn } from '@/lib/utils'

import { AudioFeatsChart } from './audio-feats-chart'
import { BlurImage } from './blur-image'
import { Button, buttonVariants } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface SongDetailsDialogProps {
  data: SpotiResponse
}

export function SongDetailsDialog({ data }: SongDetailsDialogProps) {
  return (
    <Dialog>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <DialogTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                type="button"
                className="group h-auto rounded-md bg-transparent p-0 hover:bg-transparent"
              >
                <AnimatePresence mode="wait" key={data.albumImageUrl}>
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
          <div className="relative h-28 w-full overflow-hidden rounded-md bg-transparent shadow-md sm:h-40 sm:w-40 sm:min-w-[10rem]">
            <BlurImage src={data.albumImageUrl} alt="Album" priority />
          </div>
          <p className="flex flex-col text-center sm:text-left">
            <span className="line-clamp-2 text-base font-bold sm:text-lg">{data.title}</span>
            <span className="line-clamp-2 text-sm font-semibold sm:text-base">{data.artist}</span>
            <span className="text-xs opacity-80 sm:text-sm">
              {data.album} · {new Date(data.albumReleaseDate).getFullYear()}
            </span>
            <span className="text-xs opacity-80 sm:text-sm">Popularity · {data.popularity}%</span>
            <a
              target="_blank"
              href={data.songUrl}
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'mt-2 h-8 self-center text-xs sm:h-9 sm:self-start sm:text-sm',
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
  )
}
