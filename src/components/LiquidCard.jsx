import { useRef } from 'react'
import LiquidGlass from 'liquid-glass-react'

export default function LiquidCard({
  children,
  className = '',
  cornerRadius = 24,
  displacementScale = 18,
  blurAmount = 0.06,
  saturation = 125,
  aberrationIntensity = 0.5,
  elasticity = 0.08,
}) {
  const cardRef = useRef(null)

  const handlePointerMove = (event) => {
    if (!cardRef.current) return

    const rect =
      cardRef.current.getBoundingClientRect()

    const x =
      event.clientX - rect.left

    const y =
      event.clientY - rect.top

    cardRef.current.style.setProperty(
      '--glass-x',
      `${x}px`
    )

    cardRef.current.style.setProperty(
      '--glass-y',
      `${y}px`
    )
  }

  return (
    <div
      ref={cardRef}
      className={`liquid-card ${className}`}
      onPointerMove={handlePointerMove}
    >
      <LiquidGlass
        cornerRadius={cornerRadius}
        displacementScale={displacementScale}
        blurAmount={blurAmount}
        saturation={saturation}
        aberrationIntensity={
          aberrationIntensity
        }
        elasticity={elasticity}
        mode="standard"
        padding="0"
      >
        {children}
      </LiquidGlass>
    </div>
  )
}
