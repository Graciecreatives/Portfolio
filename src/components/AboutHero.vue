<template>
  <section class="aboutHero">
    <div class="aboutHeroInner">
      <div class="aboutHeroCopy" data-aos="fade-up">
        <span>About Me</span>
        <h1>From idea to working product.</h1>
        <p>
          Fullstack development for founders and growing teams who need reliable websites, dashboards, ecommerce platforms, and web apps with clean interfaces and practical engineering.
        </p>

        <div class="aboutHeroActions">
          <router-link to="/projects" class="primaryBtn">View Projects</router-link>
          <router-link to="/contact" class="secondaryBtn">Work With Me</router-link>
        </div>
      </div>

      <div class="aboutImageWrap" data-aos="zoom-in" data-aos-delay="120">
        <img :src="AboutImage" alt="Precious Grace Egbewale" loading="lazy">
      </div>
    </div>

    <AboutToolsMarquee />
  </section>
</template>

<script setup>
import AboutImage from '@/assets/Images/about/my pictre2.webp'
import AboutToolsMarquee from '@/components/AboutToolsMarquee.vue'
</script>

<style scoped>
.aboutHero {
  position: relative;
  overflow: hidden;
  padding: 8.5rem 1.25rem 0;
  color: #ffffff;
  background:
    radial-gradient(circle at 18% 24%, rgba(236, 72, 153, 0.16), transparent 25rem),
    radial-gradient(circle at 78% 20%, rgba(34, 211, 238, 0.12), transparent 23rem),
    linear-gradient(135deg, #09030f 0%, #210533 52%, #05020b 100%);
}

.aboutHero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34, 211, 238, 0.16) 1px, transparent 1px);
  background-size: 64px 64px;
  background-position: center top;
  opacity: 0.58;
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.28));
  pointer-events: none;
}

.aboutHeroInner {
  position: relative;
  z-index: 1;
  max-width: 75rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 31rem);
  align-items: center;
  gap: 3.5rem;
  padding-bottom: 5.5rem;
}

.aboutHeroCopy {
  max-width: 51rem;
}

.aboutHeroCopy span {
  display: inline-block;
  margin-bottom: 1rem;
  color: #67e8f9;
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.aboutHeroCopy h1 {
  max-width: 50rem;
  font-size: clamp(2.55rem, 5vw, 5.25rem);
  font-weight: 950;
  line-height: 0.98;
  letter-spacing: 0;
}

.aboutHeroCopy p {
  max-width: 42rem;
  margin-top: 1.35rem;
  color: rgba(237, 233, 254, 0.78);
  font-size: 1.05rem;
  line-height: 1.85;
}

.aboutHeroActions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
}

.primaryBtn,
.secondaryBtn {
  display: inline-flex;
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.45rem;
  font-weight: 850;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  white-space: nowrap;
}

.primaryBtn {
  background: #ffffff;
  color: #5b0f86;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
}

.secondaryBtn {
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

.primaryBtn:hover,
.secondaryBtn:hover {
  transform: translateY(-2px);
}

.secondaryBtn:hover {
  background: rgba(255, 255, 255, 0.16);
}

.aboutImageWrap {
  justify-self: end;
  width: min(100%, 25rem);
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.36);
}

.aboutImageWrap img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

@media (max-width: 900px) {
  .aboutHero {
    padding: 7.5rem 1.1rem 0;
  }

  .aboutHeroInner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-bottom: 4rem;
  }

  .aboutImageWrap {
    justify-self: start;
    width: min(100%, 22rem);
  }
}

@media (max-width: 480px) {
  .aboutHeroActions {
    flex-direction: column;
  }

  .primaryBtn,
  .secondaryBtn {
    width: 100%;
  }

}
</style>
