import LiquidCard from '../components/LiquidCard'

export default function About() {
  return (
    <main className="about-page">

      <div className="page-heading">
        <span className="section-label">
          ABOUT
        </span>

        <h1>
          关于我
        </h1>
      </div>

      <LiquidCard
        className="about-glass"
        displacementScale={24}
      >
        <div className="about-avatar">
          B
        </div>

        <div className="about-text">
          <h2>
            boxueduocai
          </h2>

          <p>
            一个喜欢折腾 Android、AI、代码和各种新鲜东西的人。
          </p>

          <p>
            这个博客用来记录我的折腾过程、学习经历，
            以及那些值得留下来的东西。
          </p>
        </div>
      </LiquidCard>

    </main>
  )
}
