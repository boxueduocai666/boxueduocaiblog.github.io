import ArticleCard from '../components/ArticleCard'
import LiquidCard from '../components/LiquidCard'
import Footer from '../components/Footer'

const articles = [
  {
    id: 'adb-permission',
    title: 'ADB权限没那么难——普通人也能轻松上手',
    date: '2026-08-23',
    description:
      'ADB 并没有想象中那么复杂，这篇文章带你从零了解 Android ADB 权限。',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <LiquidCard className="hero-card">
          <div className="hero-content">
            <div className="hero-avatar">
              B
            </div>

            <div>
              <p className="hero-label">
                WELCOME TO
              </p>

              <h1>
                boxueduocai's Blog
              </h1>

              <p className="hero-description">
                记录技术、生活，以及那些值得留下的东西。
              </p>
            </div>
          </div>
        </LiquidCard>
      </section>

      <section className="articles">
        <div className="section-title">
          <span>文章</span>

          <small>
            ARTICLES
          </small>
        </div>

        <div className="article-grid">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
