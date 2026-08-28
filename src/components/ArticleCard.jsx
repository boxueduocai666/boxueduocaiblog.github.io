import { Link } from 'react-router-dom'
import LiquidCard from './LiquidCard'

export default function ArticleCard({ article }) {
  return (
    <LiquidCard
      className="article-card"
      displacementScale={22}
      aberrationIntensity={0.8}
    >
      <Link
        to={`/article/${article.id}`}
        className="article-card-link"
      >
        <div className="article-meta">
          <span>{article.date}</span>

          <span className="article-arrow">
            ↗
          </span>
        </div>

        <div className="article-main">
          <h3>{article.title}</h3>

          {article.description && (
            <p>{article.description}</p>
          )}
        </div>

        <div className="article-read">
          <span>阅读文章</span>
          <span>→</span>
        </div>
      </Link>
    </LiquidCard>
  )
}
