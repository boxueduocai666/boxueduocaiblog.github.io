import LiquidCard from '../components/LiquidCard'

export default function About() {
  return (
    <section className="about-page">
      <div className="page-heading">
        <span>
          ABOUT
        </span>

        <h1>
          关于我
        </h1>
      </div>

      <LiquidCard
        className="about-card"
        displacementScale={20}
        aberrationIntensity={0.6}
      >
        <div className="about-avatar">
          B
        </div>

        <div className="about-content">
          <h2>
            boxueduocai
          </h2>

          <p>
            一个喜欢折腾 Android、AI、
            代码和各种新鲜东西的人。
          </p>

          <p>
            这个博客用来记录我的折腾过程、
            学习经历，以及那些值得留下来的东西。
          </p>

          <p>
            不追求把一切做得完美，
            只是想把一路走过的东西留下来。
          </p>
        </div>
      </LiquidCard>
    </section>
  )
}
