import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#5A7D6E',
          borderRadius: '40px',
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 4C11.5 4 8 8 8 12c0 5 8 18 8 18s8-13 8-18c0-4-3.5-8-8-8z"
            fill="#FDFCFA"
            stroke="#C4A5A0"
            strokeWidth="1"
          />
          <circle cx="16" cy="12" r="3" fill="#B08080" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
