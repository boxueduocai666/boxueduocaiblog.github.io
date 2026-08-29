import {
  Link,
  useParams,
} from 'react-router-dom'

import LiquidCard from '../components/LiquidCard'
import { getPost } from '../posts'

export default function Article() {
  const { id } = useParams()

  const article =
    getPost(id)

  if (!article) {
    return (
      <section className="article-page">
        <LiquidCard className="article-container">
          <Link
            to="/"
            className="back-link"
          >
            ← 返回首页
          </Link>

          <div className="article-not-found">
            <span>
              404
            </span>

            <h1>
              找不到这篇文章
            </h1>

            <p>
              这篇文章可能已经被删除，
              或者链接地址不正确。
            </p>
          </div>
        </LiquidCard>
      </section>
    )
  }

  return (
    <section className="article-page">
      <LiquidCard className="article-container">
        <Link
          to="/"
          className="back-link"
        >
          ← 返回首页
        </Link>

        <div className="article-header">
          <p className="article-date">
            {article.date}
          </p>

          <h1>
            {article.title}
          </h1>

          {article.description && (
            <p className="article-description">
              {article.description}
            </p>
          )}
        </div>

        <div className="article-content">
          {article.content.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>
      </LiquidCard>
    </section>
  )
}
