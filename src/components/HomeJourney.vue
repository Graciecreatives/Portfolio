<template>
  <section class="journeySection">
    <div class="journeyGlow journeyGlowOne"></div>
    <div class="journeyGlow journeyGlowTwo"></div>

    <div class="journeyHeading" data-aos="fade-up">
      <span>About Me</span>
      <h2>Building with purpose and community</h2>
    </div>

    <div class="journeyInner">
      <div class="editorPanel" data-aos="fade-right">
        <div class="editorTopbar">
          <div class="windowDots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="fileName">journey.js</span>
        </div>

        <div class="codeBody" aria-label="About Precious Grace Egbewale">
          <div class="line">
            <span class="lineNumber">01</span>
            <code><span class="tokenKeyword">const</span> mission = <span class="tokenString">"Building products, leading communities, and turning ambitious ideas into reality."</span>;</code>
          </div>
          <div class="line">
            <span class="lineNumber">02</span>
            <code></code>
          </div>
          <div class="line">
            <span class="lineNumber">03</span>
            <code><span class="tokenKeyword">const</span> experience = {</code>
          </div>
          <div class="line indent">
            <span class="lineNumber">04</span>
            <code>years: <span class="tokenNumber">"3+"</span>,</code>
          </div>
          <div class="line indent">
            <span class="lineNumber">05</span>
            <code>focus: <span class="tokenString">"fullstack development"</span>,</code>
          </div>
          <div class="line indent">
            <span class="lineNumber">06</span>
            <code>impact: <span class="tokenString">"startups, innovative projects, hackathons, websites, and web applications"</span>,</code>
          </div>
          <div class="line indent">
            <span class="lineNumber">07</span>
            <code>community: <span class="tokenString">"Co-Lead of the NITHUB Tech Community and active GDG member"</span>,</code>
          </div>
          <div class="line indent">
            <span class="lineNumber">08</span>
            <code>passion: <span class="tokenString">"empowering developers and pushing technology forward"</span></code>
          </div>
          <div class="line">
            <span class="lineNumber">09</span>
            <code>};</code>
          </div>
        </div>

        <router-link to="/about" class="journeyButton">
          <span>Discover My Journey</span>
          <span class="buttonArrow" aria-hidden="true">→</span>
        </router-link>
      </div>

      <div class="journeyPortrait" data-aos="fade-left" data-aos-delay="120">
        <div class="portraitFrame">
          <img :src="JourneyImage" alt="Precious Grace Egbewale" loading="lazy">
          <div class="portraitShade"></div>
        </div>
        <div class="roleTag tagTop">
          <strong>Fullstack Developer</strong>
          <span>Products that solve real problems</span>
        </div>
        <div class="roleTag tagBottom">
          <strong>Community Co-Lead</strong>
          <span>NITHUB + GDG ecosystem</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import JourneyImage from '../assets/Images/about/My Picutre3.webp'
</script>

<style scoped>
.journeySection {
  position: relative;
  overflow: hidden;
  padding: 6rem 1.25rem;
  background:
    radial-gradient(circle at 78% 18%, rgba(20, 184, 166, 0.16), transparent 28rem),
    radial-gradient(circle at 18% 86%, rgba(236, 72, 153, 0.18), transparent 30rem),
    linear-gradient(180deg, #03020a 0%, #0d0718 48%, #080313 100%);
  isolation: isolate;
}

.journeySection::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 58px 58px;
  mask-image: linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent);
  pointer-events: none;
}

.journeyGlow {
  position: absolute;
  z-index: 1;
  border-radius: 999px;
  filter: blur(78px);
  opacity: 0.34;
  pointer-events: none;
}

.journeyGlowOne {
  width: 24rem;
  height: 24rem;
  left: -8rem;
  top: 12%;
  background: #14b8a6;
}

.journeyGlowTwo {
  width: 28rem;
  height: 28rem;
  right: -10rem;
  bottom: 4%;
  background: #ec4899;
}

.journeyInner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(20rem, 0.92fr);
  align-items: center;
  gap: 3rem;
  width: min(100%, 75rem);
  margin: 0 auto;
}

.journeyHeading {
  position: relative;
  z-index: 2;
  max-width: 44rem;
  margin: 0 auto 3.5rem;
  text-align: center;
}

.journeyHeading span {
  display: inline-flex;
  margin-bottom: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  padding: 0.46rem 0.95rem;
  color: #f0abfc;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.journeyHeading h2 {
  color: #fff;
  font-size: clamp(2rem, 4vw, 3.4rem);
  font-weight: 900;
  line-height: 1.06;
}

.editorPanel {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 1.25rem;
  background: rgba(9, 10, 22, 0.86);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 0 0 1px rgba(20, 184, 166, 0.12),
    0 26px 70px rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(18px);
}

.editorTopbar {
  display: flex;
  min-height: 3.4rem;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.055);
  padding: 0 1.25rem;
}

.windowDots {
  display: flex;
  gap: 0.48rem;
}

.windowDots span {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 999px;
}

.windowDots span:nth-child(1) {
  background: #fb7185;
}

.windowDots span:nth-child(2) {
  background: #fbbf24;
}

.windowDots span:nth-child(3) {
  background: #34d399;
}

.fileName {
  color: rgba(226, 232, 240, 0.74);
  font-size: 0.88rem;
  font-weight: 800;
}

.codeBody {
  display: grid;
  gap: 0.42rem;
  padding: 1.35rem 1.25rem 0.75rem;
  color: #dbeafe;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.9rem;
  line-height: 1.7;
}

.line {
  display: grid;
  grid-template-columns: 2.2rem minmax(0, 1fr);
  gap: 0.85rem;
}

.line code {
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}

.lineNumber {
  color: rgba(148, 163, 184, 0.58);
  user-select: none;
}

.indent code {
  padding-left: 1rem;
}

.tokenKeyword {
  color: #67e8f9;
}

.tokenString {
  color: #f0abfc;
}

.tokenNumber {
  color: #fde68a;
}

.journeyButton {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  min-height: 3.2rem;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin: 1rem 1.25rem 1.4rem 4.3rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 999px;
  background:
    linear-gradient(100deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04)),
    linear-gradient(100deg, #14b8a6, #a855f7 52%, #ec4899);
  color: #fff;
  padding: 0.82rem 1.45rem;
  font-weight: 900;
  text-decoration: none;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 16px 38px rgba(20, 184, 166, 0.22),
    0 0 28px rgba(168, 85, 247, 0.32);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}

.journeyButton::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.28) 44%, transparent 68%);
  transform: translateX(-120%);
  transition: transform 520ms ease;
}

.journeyButton span {
  position: relative;
  z-index: 1;
}

.buttonArrow {
  display: grid;
  width: 1.7rem;
  height: 1.7rem;
  place-items: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  font-size: 1rem;
  line-height: 1;
  transition: transform 220ms ease, background 220ms ease;
}

.journeyButton:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.38);
  box-shadow: 0 18px 44px rgba(20, 184, 166, 0.28), 0 0 38px rgba(236, 72, 153, 0.34);
}

.journeyButton:hover::before {
  transform: translateX(120%);
}

.journeyButton:hover .buttonArrow {
  transform: translateX(3px);
  background: rgba(255, 255, 255, 0.28);
}

.journeyPortrait {
  position: relative;
  min-height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portraitFrame {
  position: relative;
  width: min(28rem, 88vw);
  min-height: 32rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 1.5rem;
  background:
    linear-gradient(145deg, rgba(20, 184, 166, 0.18), rgba(168, 85, 247, 0.12)),
    rgba(255, 255, 255, 0.06);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 26px 70px rgba(0, 0, 0, 0.36),
    0 0 42px rgba(20, 184, 166, 0.16);
}

.portraitFrame img {
  position: absolute;
  inset: auto 50% 0 auto;
  width: min(28rem, 92vw);
  max-height: 33rem;
  transform: translateX(50%);
  object-fit: contain;
  filter: drop-shadow(0 0 28px rgba(20, 184, 166, 0.24));
}

.portraitShade {
  position: absolute;
  inset: auto 0 0;
  height: 38%;
  background: linear-gradient(to top, rgba(5, 2, 11, 0.92), transparent);
  pointer-events: none;
}

.roleTag {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
  max-width: 13.5rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1rem;
  background: rgba(9, 10, 22, 0.68);
  padding: 0.82rem 0.95rem;
  color: #fff;
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(16px);
}

.roleTag strong {
  font-size: 0.9rem;
}

.roleTag span {
  color: rgba(237, 233, 254, 0.72);
  font-size: 0.76rem;
  line-height: 1.45;
}

.tagTop {
  top: 13%;
  left: 0;
}

.tagBottom {
  right: 0;
  bottom: 13%;
}

@media (max-width: 1023px) {
  .journeyInner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .journeyPortrait {
    order: -1;
  }
}

@media (max-width: 640px) {
  .journeySection {
    padding: 4rem 1rem;
  }

  .journeyHeading {
    margin-bottom: 2.4rem;
  }

  .journeyHeading h2 {
    font-size: clamp(1.8rem, 9vw, 2.35rem);
  }

  .editorTopbar {
    padding: 0 1rem;
  }

  .codeBody {
    padding: 1.1rem 1rem 0.65rem;
    font-size: 0.78rem;
    line-height: 1.75;
  }

  .line {
    grid-template-columns: 1.8rem minmax(0, 1fr);
    gap: 0.55rem;
  }

  .journeyButton {
    width: calc(100% - 2rem);
    margin: 0.9rem 1rem 1.2rem;
    padding: 0.78rem 1rem;
    font-size: 0.95rem;
  }

  .journeyPortrait {
    min-height: 29rem;
  }

  .portraitFrame {
    min-height: 28rem;
    border-radius: 1.15rem;
  }

  .roleTag {
    display: none;
  }
}
</style>
