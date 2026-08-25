import { Link } from 'react-router-dom'
import LiquidGlass from 'liquid-glass-react'

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <LiquidGlass
        displacementScale={35}
        blurAmount={0.08}
        saturation={120}
        aberrationIntensity={1.5}
        elasticity={0.15}
        cornerRadius={24}
        padding="0"
      >
        <nav className="navbar">
          <Link
            to="/"
            className="navbar-logo"
          >
            boxueduocai
          </Link>

          <div className="navbar-links">
            <Link to="/">首页</Link>
            <Link to="/about">关于</Link>
          </div>
        </nav>
      </LiquidGlass>
    </header>
  )
}
