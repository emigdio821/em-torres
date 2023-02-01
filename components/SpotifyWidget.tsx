import {
  Flex,
  Text,
  Link,
  Image,
  Stack,
  VStack,
  Tooltip,
  Spinner,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react'
import useSWR, { Fetcher } from 'swr'
import { ISpotiResponse } from '@/types'
import { BiMusic } from 'react-icons/bi'
import { FaSpotify } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion'
import MotionDiv from './MotionDiv'
import Equalizer from './Equalizer'

function SongTooltip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip
      px={3}
      hasArrow
      rounded="md"
      fontSize="xs"
      arrowSize={6}
      color="#f0efef"
      placement="bottom"
      label="Refresh song data"
      bg={useColorModeValue('#333', '#222')}
    >
      {children}
    </Tooltip>
  )
}

export default function SpotifyWidget() {
  const fetcher: Fetcher<ISpotiResponse> = (url: string) =>
    fetch(url).then((r) => r.json())
  const { data, mutate, error, isLoading } = useSWR('/api/spotify', fetcher)
  const isPlaying = data?.isPlaying

  return (
    <>
      <Flex borderRadius="full" bg="dark" alignItems="center" direction="row">
        <AnimatePresence mode="wait" key={isPlaying ? data.albumImageUrl : ''}>
          <MotionDiv y={10}>
            <SongTooltip>
              <Image
                mr={2}
                minW="80px"
                alt="Album"
                boxSize={20}
                rounded="md"
                boxShadow="2xl"
                cursor="pointer"
                objectFit="cover"
                _hover={{
                  filter: 'brightness(0.6)',
                }}
                _active={{
                  filter: 'brightness(1)',
                }}
                onClick={() => mutate()}
                transition="all 0.2s ease-in-out"
                src={isPlaying ? data.albumImageUrl : ''}
                fallback={
                  <SongTooltip>
                    <VStack
                      w={20}
                      mr={2}
                      h={20}
                      bg="#333"
                      rounded="md"
                      cursor="pointer"
                      justify="center"
                      _hover={{
                        filter: 'brightness(0.6)',
                      }}
                      _active={{
                        filter: 'brightness(1)',
                      }}
                      onClick={() => mutate()}
                      transition="all 0.2s ease-in-out"
                    >
                      {isLoading ? (
                        <Spinner />
                      ) : (
                        <BiMusic color="white" size={18} />
                      )}
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
          alignContent="center"
          alignItems="flex-start"
          gap={isLoading ? '18px' : 'unset'}
        >
          <Stack direction="row" align="center">
            <FaSpotify size={20} style={{ height: '24px' }} />
            {isPlaying && <Equalizer />}
          </Stack>
          {isPlaying ? (
            <>
              <Link
                target="_blank"
                color="inherit"
                fontWeight={600}
                href={data?.songUrl}
                textUnderlineOffset={4}
              >
                {data.title}
              </Link>
              <Text fontWeight={400}>{data.artist}</Text>
            </>
          ) : (
            <>
              <Skeleton
                isLoaded={!isLoading}
                height={isLoading ? '6px' : 'inherit'}
              >
                <Text fontWeight={600} noOfLines={1}>
                  No song playing
                </Text>
              </Skeleton>
              <Skeleton
                isLoaded={!isLoading}
                height={isLoading ? '6px' : 'inherit'}
              >
                <Text>Spotify</Text>
              </Skeleton>
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