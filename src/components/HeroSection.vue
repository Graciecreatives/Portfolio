<template>
  <main>
    <section class="heroSection min-h-screen relative overflow-hidden pt-32 pb-16 md:pt-36">
      <div class="heroGridFloor"></div>
      <div class="heroGridHorizon"></div>
      <div class="heroVignette"></div>

      <div class="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div 
          v-for="(particle, index) in particles" 
          :key="index"
          class="particle absolute rounded-full bg-white"
          :style="particle.style"
        ></div>
      </div>

      <div class="relative z-20 mx-auto grid min-h-[calc(100vh-9rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div class="heroCopy text-left">
          <div data-aos="fade-down" class="availabilityBadge">
            <span></span>
            Available For Projects
          </div>

          <h1 data-aos="fade-up" class="heroTitle mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Building polished
            <span class="gradientText block">fullstack products</span>
            with clean code.
          </h1>

          <p data-aos="fade-up" data-aos-delay="100" class="heroDescription mt-6 max-w-2xl text-base leading-8 text-violet-100/80 sm:text-lg">
            Hi, I'm Precious Grace Egbewale. I design and build scalable web experiences, dashboards, ecommerce products, and modern interfaces that feel fast, thoughtful, and production-ready.
          </p>

          <div data-aos="fade-up" data-aos-delay="200" class="heroActions mt-8 flex flex-col gap-4 sm:flex-row">
            <router-link to="/projects" class="primaryCta">
              View My Works
            </router-link>
            <router-link to="/contact" class="secondaryCta">
              Contact Me
            </router-link>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="150" class="heroPortraitWrap">
          <div class="portraitPanel">
            <img :src="HeroImage" alt="Precious Grace Egbewale" class="heroPortrait" loading="eager">
            <div class="portraitFade"></div>
          </div>
          <div class="floatingMetric metricTop">
            <strong>Fullstack</strong>
            <span>Vue / React / Node</span>
          </div>
          <div class="floatingMetric metricBottom">
            <strong>Clean UI</strong>
            <span>Fast, responsive builds</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeroImage from '../assets/Images/portraits/My picture1.webp';

const particles = ref([]);

const generateParticles = (count = 48) => {
  const newParticles = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 2.5 + 1 + 'px';
    newParticles.push({
      style: {
        width: size,
        height: size,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        opacity: Math.random() * 0.55 + 0.18,
        animationDelay: Math.random() * 8 + 's',
        animationDuration: Math.random() * 12 + 14 + 's',
      }
    });
  }
  particles.value = newParticles;
};

onMounted(() => {
  generateParticles();
});
</script>

<style scoped>
.heroSection {
  background:
    radial-gradient(circle at 33% 43%, rgba(168, 85, 247, 0.22), transparent 31rem),
    radial-gradient(circle at 68% 28%, rgba(236, 72, 153, 0.14), transparent 29rem),
    linear-gradient(135deg, #2d0057 0%, #13001f 45%, #03020a 100%);
  position: relative;
  isolation: isolate;
}

.heroSection::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.28) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.26) 1px, transparent 1px);
  background-size: 68px 68px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.35));
  filter: drop-shadow(0 0 14px rgba(168, 85, 247, 0.72));
  opacity: 0.82;
  animation: gridDrift 18s linear infinite;
  pointer-events: none;
}

.heroGridFloor {
  position: absolute;
  left: -12%;
  right: -12%;
  bottom: -9%;
  height: 50%;
  z-index: 2;
  transform: perspective(720px) rotateX(62deg);
  transform-origin: bottom center;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.68) 1px, transparent 1px),
    linear-gradient(90deg, rgba(236, 72, 153, 0.5) 1px, transparent 1px);
  background-size: 62px 62px;
  box-shadow: inset 0 45px 90px rgba(168, 85, 247, 0.22), 0 0 88px rgba(168, 85, 247, 0.38);
  animation: floorMove 11s linear infinite;
  pointer-events: none;
}

.heroGridFloor::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 186px 186px;
  filter: drop-shadow(0 0 12px rgba(236, 72, 153, 0.35));
}

.heroGridHorizon {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 35%;
  z-index: 3;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.78), rgba(236, 72, 153, 0.42), transparent);
  box-shadow: 0 0 32px rgba(168, 85, 247, 0.76), 0 0 78px rgba(236, 72, 153, 0.35);
  opacity: 0.82;
  pointer-events: none;
}

.heroVignette {
  position: absolute;
  inset: 0;
  z-index: 4;
  background:
    linear-gradient(to bottom, rgba(3, 2, 10, 0.08), transparent 30%, rgba(3, 2, 10, 0.72)),
    radial-gradient(circle at center, transparent 0, rgba(3, 2, 10, 0.32) 78%);
  pointer-events: none;
}

.availabilityBadge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 28px rgba(168, 85, 247, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.16);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.92rem;
  font-weight: 700;
  padding: 0.58rem 1rem;
  backdrop-filter: blur(18px);
}

.availabilityBadge span {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: #a855f7;
  box-shadow: 0 0 18px #a855f7;
}

.gradientText {
  background: linear-gradient(92deg, #a855f7 0%, #ec4899 48%, #fb923c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 38px rgba(168, 85, 247, 0.22);
}

.primaryCta,
.secondaryCta {
  display: inline-flex;
  min-height: 3.35rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.85rem 1.65rem;
  font-weight: 800;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background 220ms ease;
}

.primaryCta {
  background: linear-gradient(100deg, #a855f7, #ec4899 58%, #fb923c);
  color: #fff;
  box-shadow: 0 0 28px rgba(168, 85, 247, 0.48), 0 15px 42px rgba(236, 72, 153, 0.2);
}

.secondaryCta {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
}

.primaryCta:hover,
.secondaryCta:hover {
  transform: translateY(-3px);
}

.primaryCta:hover {
  box-shadow: 0 0 42px rgba(168, 85, 247, 0.62), 0 18px 48px rgba(236, 72, 153, 0.27);
}

.secondaryCta:hover {
  border-color: rgba(168, 85, 247, 0.7);
  background: rgba(168, 85, 247, 0.14);
  box-shadow: 0 0 26px rgba(168, 85, 247, 0.24);
}

.heroPortraitWrap {
  position: relative;
  min-height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portraitPanel {
  position: relative;
  width: min(31rem, 86vw);
  min-height: 32rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 2rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(168, 85, 247, 0.08) 42%, rgba(255, 255, 255, 0.03));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    0 0 55px rgba(168, 85, 247, 0.22),
    0 32px 90px rgba(0, 0, 0, 0.36);
  backdrop-filter: blur(18px);
}

.heroPortrait {
  position: relative;
  z-index: 2;
  width: min(29rem, 84vw);
  max-height: 33rem;
  object-fit: contain;
  filter: drop-shadow(0 0 28px rgba(168, 85, 247, 0.38));
}

.portraitFade {
  position: absolute;
  inset: auto 0 0;
  z-index: 3;
  height: 32%;
  background: linear-gradient(to top, rgba(9, 2, 20, 0.92), transparent);
  pointer-events: none;
}

.floatingMetric {
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1.1rem;
  background: rgba(17, 8, 34, 0.58);
  padding: 0.85rem 1rem;
  color: #fff;
  box-shadow: 0 16px 46px rgba(0, 0, 0, 0.28), 0 0 24px rgba(168, 85, 247, 0.2);
  backdrop-filter: blur(18px);
}

.floatingMetric strong {
  font-size: 0.95rem;
}

.floatingMetric span {
  color: rgba(237, 233, 254, 0.72);
  font-size: 0.78rem;
}

.metricTop {
  top: 14%;
  left: 0;
  animation: metricFloat 5.5s ease-in-out infinite;
}

.metricBottom {
  right: 0;
  bottom: 15%;
  animation: metricFloat 6s ease-in-out 0.8s infinite;
}

.particle {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.65), 0 0 18px rgba(168, 85, 247, 0.45);
  animation: floatParticle linear infinite;
}

@keyframes floatParticle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(-120px) translateX(42px) scale(0.7);
    opacity: 0;
  }
}

@keyframes gridDrift {
  to {
    background-position: 68px 68px;
  }
}

@keyframes floorMove {
  to {
    background-position: 0 62px, 62px 0;
  }
}

@keyframes metricFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

@media (max-width: 1023px) {
  .heroCopy {
    text-align: center;
  }

  .availabilityBadge {
    margin-left: auto;
    margin-right: auto;
  }

  .heroPortraitWrap {
    min-height: 30rem;
  }
}

@media (max-width: 640px) {
  .heroSection {
    padding-top: 7.25rem;
    padding-bottom: 3rem;
  }

  .heroSection > .relative {
    gap: 2rem;
    min-height: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .heroSection::before {
    background-size: 52px 52px;
  }

  .availabilityBadge {
    gap: 0.5rem;
    font-size: 0.78rem;
    padding: 0.48rem 0.8rem;
  }

  .availabilityBadge span {
    width: 0.45rem;
    height: 0.45rem;
  }

  .heroTitle {
    max-width: 19.5rem;
    margin-top: 1.35rem;
    margin-left: auto;
    margin-right: auto;
    font-size: clamp(1.95rem, 9.5vw, 2.45rem);
    line-height: 1.1;
    text-wrap: balance;
  }

  .heroDescription {
    max-width: 21rem;
    margin-top: 1.15rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.96rem;
    line-height: 1.72;
    color: rgba(237, 233, 254, 0.78);
  }

  .heroActions {
    width: min(100%, 21rem);
    margin-top: 1.55rem;
    margin-left: auto;
    margin-right: auto;
    gap: 0.8rem;
  }

  .primaryCta,
  .secondaryCta {
    min-height: 3rem;
    width: 100%;
    padding: 0.78rem 1.2rem;
    font-size: 0.95rem;
  }

  .heroGridFloor {
    height: 36%;
    background-size: 48px 48px;
  }

  .heroPortraitWrap {
    min-height: 26rem;
  }

  .portraitPanel {
    min-height: 26rem;
    border-radius: 1.4rem;
  }

  .floatingMetric {
    display: none;
  }
}
</style>
