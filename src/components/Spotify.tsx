import { BiMusic } from 'react-icons/bi'
import { FaSpotify } from 'react-icons/fa'
import useNowPlaying from 'hooks/useNowPlaying'
import { Flex, Text, Image, Stack, VStack, Tooltip } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import MotionDiv from './MotionDiv'
import Equalizer from './Equalizer'
// import useRecentlyPlayed from "hooks/useRecentlyPlayed";

function SongTooltip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip
      px={3}
      hasArrow
      rounded="md"
      fontSize="xs"
      arrowSize={6}
      placement="bottom"
      label="Refresh song data"
    >
      {children}
    </Tooltip>
  )
}

export default function Spotify() {
  const nowPlaying = useNowPlaying()
  // const recentlyPlayed = useRecentlyPlayed();
  const { playing, refreshSongData } = nowPlaying
  const { song, error } = playing

  // if (!currSong) currSong = recentlyPlayed.song;
  // if (!error) error = recentlyPlayed.error;

  return (
    <>
      <Flex borderRadius="full" bg="dark" alignItems="center" direction="row">
        <AnimatePresence mode="wait" key={song?.album.images[0].url}>
          <MotionDiv y={10}>
            <SongTooltip>
              <Image
                mr={2}
                minW="80px"
                alt="Album"
                boxSize={20}
                boxShadow="2xl"
                cursor="pointer"
                objectFit="cover"
                _hover={{
                  filter: 'brightness(0.6)',
                }}
                _active={{
                  filter: 'brightness(1)',
                }}
                borderRadius="md"
                onClick={() => refreshSongData()}
                transition="all 0.2s ease-in-out"
                src={song?.album.images[0].url || ''}
                fallback={
                  <SongTooltip>
                    <VStack
                      w={20}
                      mr={2}
                      h={20}
                      bg="#333"
                      cursor="pointer"
                      justify="center"
                      borderRadius="md"
                      _hover={{
                        filter: 'brightness(0.6)',
                      }}
                      _active={{
                        filter: 'brightness(1)',
                      }}
                      transition="all 0.2s ease-in-out"
                      onClick={() => refreshSongData()}
                    >
                      <BiMusic color="white" size={18} />
                    </VStack>
                  </SongTooltip>
                }
              />
            </SongTooltip>
          </MotionDiv>
        </AnimatePresence>
        <Flex
          px={2}
          borderRadius="md"
          direction="column"
          alignItems="flex-start"
        >
          <Stack direction="row" align="center">
            <FaSpotify size={20} style={{ height: '24px' }} />
            {song && <Equalizer />}
          </Stack>
          {song ? (
            <AnimatePresence mode="wait" key={song.name}>
              <MotionDiv y={5}>
                <Text fontWeight={600} noOfLines={2}>
                  {song.name}
                </Text>
                <Text>{song.artists[0]?.name}</Text>
              </MotionDiv>
            </AnimatePresence>
          ) : (
            <>
              <Text fontWeight={600} noOfLines={1}>
                No song playing
              </Text>
              <Text>Spotify</Text>
            </>
          )}
        </Flex>
      </Flex>
      {error && (
        <Text fontSize="xs" mt={2}>
          {error}
        </Text>
      )}
    </>
  )
}
