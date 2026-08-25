import LiquidCard from '../components/LiquidCard'

export default function About() {
  return (
    <section className="about-page">
      <LiquidCard className="about-card">
        <p className="hero-label">
          ABOUT ME
        </p>

        <h1>
          boxueduocai
        </h1>

        <p>
          一个喜欢折腾 Android、AI、代码和各种新鲜东西的人。
        </p>

        <p>
          这个博客用来记录我的折腾过程、学习经历以及一些有趣的发现。
        </p>
      </LiquidCard>
    </section>
  )
}
