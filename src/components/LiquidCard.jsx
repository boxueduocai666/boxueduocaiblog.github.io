import LiquidGlass from 'liquid-glass-react'

export default function LiquidCard({
  children,
  className = '',
}) {
  return (
    <LiquidGlass
      displacementScale={45}
      blurAmount={0.1}
      saturation={125}
      aberrationIntensity={1.8}
      elasticity={0.18}
      cornerRadius={28}
      className={`liquid-card ${className}`}
    >
      {children}
    </LiquidGlass>
  )
}
