/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const fontReq = fetch(
  new URL('../../public/fonts/Inter-Bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer())

export default async function handler() {
  const fontData = await fontReq

  return new ImageResponse(
    (
      <div
        style={{
          gap: '16px',
          fontSize: 72,
          width: '100%',
          height: '100%',
          display: 'flex',
          color: '#ededed',
          textAlign: 'center',
          fontFamily: 'Inter',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          // backgroundColor: '#141414',
          backgroundImage:
            'url(https://emtorres.vercel.app/images/title-bg.svg)',
        }}
      >
        <img
          alt="em"
          width={200}
          height={200}
          src="https://emtorres.vercel.app/images/em.jpg"
          style={{
            borderRadius: 128,
            objectFit: 'cover',
          }}
        />
        em.dev
      </div>
    ),
    {
      width: 1000,
      height: 600,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}
