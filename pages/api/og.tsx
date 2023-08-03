/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const fontReq = fetch(new URL('../../public/fonts/Figtree-Bold.ttf', import.meta.url)).then(
  async (res) => await res.arrayBuffer(),
)

export default async function handler() {
  const fontData = await fontReq

  return new ImageResponse(
    (
      <div
        style={{
          gap: '20px',
          width: '100%',
          height: '100%',
          display: 'flex',
          color: '#ededed',
          textAlign: 'center',
          fontFamily: 'Figtree',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#141414',
          backgroundImage: 'url("https://emtorres.vercel.app/images/og-bg.png")',
        }}
      >
        <img
          alt="em"
          width={240}
          height={240}
          src="https://emtorres.vercel.app/images/em.jpg"
          style={{
            borderRadius: 128,
            objectFit: 'cover',
          }}
        />
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <span
            style={{
              fontSize: 50,
            }}
          >
            Emigdio Torres
          </span>
          <span
            style={{
              fontSize: 30,
              opacity: 0.8,
            }}
          >
            Software Engineer
          </span>
        </p>
      </div>
    ),
    {
      width: 1000,
      height: 600,
      fonts: [
        {
          name: 'Figtree',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}
