<template>
  <section class="contactBanner">
    <div class="bannerInner">
      <div class="bannerCopy" data-aos="fade-up">
        <span>Ready to build?</span>
        <h2>I help startups build polished websites and web apps.</h2>
        <p>
          I partner with founders and growing teams to create responsive websites, dashboards, ecommerce platforms, and web applications that are clean, fast, and ready to scale.
        </p>

        <div class="bannerActions">
          <router-link to="/contact" class="primaryBtn">Start a Project</router-link>
          <router-link to="/contact" class="secondaryBtn">Contact Me</router-link>
        </div>
      </div>

      <div class="bannerImageWrap" data-aos="zoom-in" data-aos-delay="120">
        <img :src="BannerImage" alt="Precious Grace Egbewale" loading="lazy">
      </div>
    </div>
  </section>
</template>

<script setup>
import BannerImage from '@/assets/Images/about/my pictre2.webp'
</script>

<style scoped>
.contactBanner {
  position: relative;
  overflow: hidden;
  padding: 5rem 1.25rem;
  background:
    radial-gradient(circle at 18% 20%, rgba(236, 72, 153, 0.18), transparent 24rem),
    radial-gradient(circle at 82% 36%, rgba(34, 211, 238, 0.14), transparent 22rem),
    linear-gradient(135deg, #09030f 0%, #210533 52%, #08020d 100%);
}

.contactBanner::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 58px 58px;
  opacity: 0.32;
  pointer-events: none;
}

.bannerInner {
  position: relative;
  z-index: 1;
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 26rem);
  align-items: center;
  gap: 3rem;
}

.bannerCopy {
  max-width: 48rem;
}

.bannerCopy span {
  display: inline-block;
  margin-bottom: 1rem;
  color: #67e8f9;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.bannerCopy h2 {
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.02;
  font-weight: 900;
  letter-spacing: 0;
}

.bannerCopy p {
  margin-top: 1.25rem;
  max-width: 39rem;
  color: rgba(255, 255, 255, 0.74);
  font-size: 1rem;
  line-height: 1.8;
}

.bannerActions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 2rem;
  gap: 0.9rem;
}

.bannerImageWrap {
  justify-self: end;
  width: min(100%, 25rem);
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.36);
}

.bannerImageWrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.primaryBtn,
.secondaryBtn {
  display: inline-flex;
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.45rem;
  font-weight: 800;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, color 180ms ease;
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

.primaryBtn:hover {
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.34);
}

.secondaryBtn:hover {
  background: rgba(255, 255, 255, 0.16);
}

@media (max-width: 820px) {
  .contactBanner {
    padding: 4rem 1.1rem;
  }

  .bannerInner {
    grid-template-columns: 1fr;
  }

  .bannerImageWrap {
    justify-self: start;
    width: min(100%, 22rem);
  }
}

@media (max-width: 480px) {
  .bannerActions {
    flex-direction: column;
  }

  .primaryBtn,
  .secondaryBtn {
    width: 100%;
  }
}
</style>
