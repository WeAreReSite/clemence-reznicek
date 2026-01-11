import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = "Syl'Vie Bien-Etre - Cabinet de Réflexologie à Pipriac"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FDFCFA',
          backgroundImage: 'linear-gradient(135deg, rgba(90, 125, 110, 0.1) 0%, rgba(196, 165, 160, 0.1) 100%)',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: 'rgba(90, 125, 110, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            backgroundColor: 'rgba(196, 165, 160, 0.15)',
          }}
        />

        {/* Logo/Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            borderRadius: '24px',
            backgroundColor: '#5A7D6E',
            marginBottom: '40px',
            boxShadow: '0 10px 40px rgba(90, 125, 110, 0.3)',
          }}
        >
          <svg
            width="70"
            height="70"
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

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 600,
              color: '#2D3A35',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Syl&apos;Vie Bien-Etre
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: '#5A7D6E',
              margin: 0,
              fontWeight: 500,
            }}
          >
            Réflexologie & Drainage Lymphatique
          </p>
          <p
            style={{
              fontSize: '22px',
              color: '#5C5555',
              margin: 0,
            }}
          >
            Pipriac (35550) - Bretagne
          </p>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '40px',
            padding: '12px 24px',
            backgroundColor: 'rgba(90, 125, 110, 0.1)',
            borderRadius: '100px',
          }}
        >
          <span style={{ fontSize: '18px', color: '#B08080' }}>
            Chouchoutez votre corps, Sublimez vos mains
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
