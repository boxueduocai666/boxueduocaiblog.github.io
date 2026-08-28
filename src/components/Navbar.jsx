import { Link, useLocation } from 'react-router-dom'
import LiquidCard from './LiquidCard'

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="site-header">
      <LiquidCard
        className="navbar-glass"
        cornerRadius={999}
        displacementScale={18}
        blurAmount={0.06}
        aberrationIntensity={0.7}
      >
        <nav className="navbar">
          <Link to="/" className="brand">
            <span className="brand-icon">B</span>
            <span className="brand-name">boxueduocai</span>
          </Link>

          <div className="nav-links">
            <Link
              to="/"
              className={location.pathname === '/' ? 'nav-active' : ''}
            >
              首页
            </Link>

            <Link
              to="/about"
              className={
                location.pathname === '/about'
                  ? 'nav-active'
                  : ''
              }
            >
              关于
            </Link>
          </div>
        </nav>
      </LiquidCard>
    </header>
  )
}
