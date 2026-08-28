import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import LiquidCard from '../components/LiquidCard'
import Footer from '../components/Footer'
import { posts } from '../posts'

export default function Home() {
  return (
    <>
      <main className="home-page">

        {/* Hero */}

        <section className="hero">
          <div className="hero-label">
            <span className="live-dot" />
            PERSONAL BLOG
          </div>

          <h1 className="hero-title">
            你好，
            <br />

            <span className="hero-gradient">
              我是 boxueduocai
            </span>
            <span className="hero-dot">.</span>
          </h1>

          <p className="hero-subtitle">
            记录技术、AI、Android，
            <br className="desktop-only" />
            以及那些值得留下的东西。
          </p>

          <div className="hero-actions">
            <a
              href="#articles"
              className="apple-button apple-button-primary"
            >
              开始阅读
              <span>↓</span>
            </a>

            <Link
              to="/about"
              className="apple-button apple-button-secondary"
            >
              关于我
            </Link>
          </div>
        </section>


        {/* Introduction */}

        <section className="intro">
          <LiquidCard
            className="intro-glass"
            displacementScale={18}
            aberrationIntensity={0.6}
          >
            <div className="intro-number">
              {String(posts.length).padStart(2, '0')}
            </div>

            <div className="intro-separator" />

            <div className="intro-copy">
              <span className="intro-small">
                ARTICLES
              </span>

              <span className="intro-large">
                用文字记录正在发生的事情。
              </span>
            </div>
          </LiquidCard>
        </section>


        {/* Articles */}

        <section
          className="articles-section"
          id="articles"
        >
          <div className="section-header">
            <div>
              <span className="section-label">
                LATEST
              </span>

              <h2>
                最近文章
              </h2>
            </div>

            <span className="article-count">
              {posts.length} 篇
            </span>
          </div>


          {posts.length > 0 ? (
            <div className="articles-grid">
              {posts.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          ) : (
            <LiquidCard className="empty-state">
              <p>
                暂时还没有文章。
              </p>
            </LiquidCard>
          )}
        </section>

      </main>

      <Footer />
    </>
  )
}
