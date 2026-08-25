import { useParams, Link } from 'react-router-dom'
import LiquidCard from '../components/LiquidCard'

export default function Article() {
  const { id } = useParams()

  return (
    <section className="article-page">
      <LiquidCard className="article-container">
        <Link
          to="/"
          className="back-link"
        >
          ← 返回首页
        </Link>

        <p className="article-date">
          2026-08-23
        </p>

        <h1>
          ADB权限没那么难——普通人也能轻松上手
        </h1>

        <div className="article-content">
          <p>
            很多人第一次接触 ADB 时，
            会觉得它非常复杂。
          </p>

          <p>
            实际上，只要理解几个基本概念，
            普通用户也可以很轻松地使用 ADB。
          </p>

          <p>
            这篇文章就是从最基础的部分开始，
            带你一步一步了解 ADB。
          </p>
        </div>
      </LiquidCard>
    </section>
  )
}
