import LiquidGlass from 'liquid-glass-react'

export default function LiquidCard({
  children,
  className = '',
  cornerRadius = 28,
  displacementScale = 28,
  blurAmount = 0.08,
  saturation = 110,
  aberrationIntensity = 1,
  elasticity = 0.1,
}) {
  return (
    <LiquidGlass
      className={`liquid-card ${className}`}
      cornerRadius={cornerRadius}
      displacementScale={displacementScale}
      blurAmount={blurAmount}
      saturation={saturation}
      aberrationIntensity={aberrationIntensity}
      elasticity={elasticity}
    >
      {children}
    </LiquidGlass>
  )
}
