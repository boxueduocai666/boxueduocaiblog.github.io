import { Link } from 'react-router-dom'

import ArticleCard from '../components/ArticleCard'
import LiquidCard from '../components/LiquidCard'
import Footer from '../components/Footer'

import { posts } from '../posts'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-label">
          <span className="hero-dot" />
          PERSONAL BLOG
        </div>

        <h1 className="hero-title">
          你好，
          <br />

          <span>
            我是 boxueduocai
          </span>
          <b>.</b>
        </h1>

        <p className="hero-description">
          记录技术、AI、Android，
          <br className="desktop-only" />
          以及那些值得留下的东西。
        </p>

        <div className="hero-actions">
          <a
            href="#articles"
            className="button button-primary"
          >
            开始阅读
            <span>↓</span>
          </a>

          <Link
            to="/about"
            className="button button-secondary"
          >
            关于我
          </Link>
        </div>
      </section>

      <section className="intro-section">
        <LiquidCard
          className="intro-card"
          displacementScale={16}
          aberrationIntensity={0.5}
        >
          <div className="intro-number">
            {String(posts.length).padStart(2, '0')}
          </div>

          <div className="intro-divider" />

          <div className="intro-copy">
            <span>
              ARTICLES
            </span>

            <p>
              用文字记录正在发生的事情。
            </p>
          </div>
        </LiquidCard>
      </section>

      <section
        className="articles-section"
        id="articles"
      >
        <div className="section-header">
          <div>
            <span>
              LATEST
            </span>

            <h2>
              最近文章
            </h2>
          </div>

          <small>
            {posts.length} 篇
          </small>
        </div>

        {posts.length > 0 ? (
          <div className="article-grid">
            {posts.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        ) : (
          <LiquidCard className="empty-card">
            <p>
              暂时还没有文章。
            </p>
          </LiquidCard>
        )}
      </section>

      <Footer />
    </>
  )
}
