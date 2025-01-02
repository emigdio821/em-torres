import type { SpotiResponse } from '@/types'
import { IconExternalLink } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { BlurImage } from '@/components/blur-image'

interface SongDetailsDialogProps {
  data: SpotiResponse
}

export function SongDetails({ data }: SongDetailsDialogProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="unstyled" className="rounded-md transition-opacity hover:opacity-80">
          <AnimatePresence mode="wait" key={data.albumImageUrl}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="size-20 rounded-md shadow-md">
                <BlurImage priority src={data.albumImageUrl} alt="Song cover" />
              </div>
            </motion.div>
          </AnimatePresence>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="flex flex-col text-center font-semibold">
          <span className="text-xs opacity-80 sm:text-sm">
            {data.album} · {new Date(data.albumReleaseDate).getFullYear()}
          </span>
          <span className="text-xs opacity-80 sm:text-sm">Popularity · {data.popularity}%</span>
        </p>

        <Button asChild className="mt-2">
          <a target="_blank" rel="noreferrer" href={data.songUrl}>
            Play on Spotify
            <IconExternalLink className="ml-2 size-4" />
          </a>
        </Button>
      </PopoverContent>
    </Popover>
  )
}
