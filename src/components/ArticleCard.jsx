import { Link } from 'react-router-dom'
import LiquidCard from './LiquidCard'

export default function ArticleCard({
  article,
}) {
  return (
    <LiquidCard className="article-card">
      <Link
        to={`/article/${article.id}`}
        className="article-card-link"
      >
        <div className="article-card-date">
          {article.date}
        </div>

        <h2>
          {article.title}
        </h2>

        <p>
          {article.description}
        </p>

        <span className="read-more">
          阅读文章 →
        </span>
      </Link>
    </LiquidCard>
  )
}
