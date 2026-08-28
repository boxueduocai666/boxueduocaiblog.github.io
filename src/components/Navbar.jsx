import { Link, useLocation } from 'react-router-dom'
import LiquidCard from './LiquidCard'

export default function Navbar() {
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isAbout = location.pathname === '/about'

  return (
    <header className="navbar-wrapper">
      <LiquidCard
        className="navbar-glass"
        cornerRadius={999}
        displacementScale={16}
        blurAmount={0.06}
        aberrationIntensity={0.6}
      >
        <nav className="navbar">
          <Link
            to="/"
            className="navbar-logo"
            aria-label="返回首页"
          >
            <span className="navbar-logo-mark">
              B
            </span>

            <span>
              boxueduocai
            </span>
          </Link>

          <div className="navbar-links">
            <Link
              to="/"
              className={isHome ? 'nav-active' : ''}
            >
              首页
            </Link>

            <Link
              to="/about"
              className={isAbout ? 'nav-active' : ''}
            >
              关于
            </Link>
          </div>
        </nav>
      </LiquidCard>
    </header>
  )
}
