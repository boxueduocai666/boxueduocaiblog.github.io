import { Link } from 'react-router-dom'
import LiquidCard from './LiquidCard'

export default function ArticleCard({ article }) {
  return (
    <LiquidCard
      className="article-card"
      displacementScale={20}
      aberrationIntensity={0.6}
    >
      <Link
        to={`/article/${article.id}`}
        className="article-card-link"
      >
        <div className="article-card-top">
          <span className="article-date">
            {article.date}
          </span>

          <span className="article-arrow">
            ↗
          </span>
        </div>

        <div className="article-card-content">
          <h2>
            {article.title}
          </h2>

          {article.description && (
            <p>
              {article.description}
            </p>
          )}
        </div>

        <div className="article-card-bottom">
          <span>
            阅读文章
          </span>

          <span>
            →
          </span>
        </div>
      </Link>
    </LiquidCard>
  )
}
