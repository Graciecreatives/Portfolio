<template>
  <footer class="siteFooter">
    <div class="footerInner">
      <div class="footerGrid" data-aos="fade-up">
        <div class="footerBrand">
          <router-link to="/" class="brandMark">
            <img src="../assets/brand/Logo.webp" alt="Gracie Creatives" loading="lazy">
          </router-link>
          <p>
            Fullstack developer helping founders and growing teams create responsive websites, dashboards, ecommerce platforms, and web applications.
          </p>

          <div class="socialLinks" aria-label="Social links">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noreferrer"
              :aria-label="social.label"
              v-html="social.icon"
            ></a>
          </div>
        </div>

        <nav class="footerLinks" aria-label="Footer navigation">
          <h3>Explore</h3>
          <router-link v-for="link in navLinks" :key="link.to" :to="link.to">{{ link.label }}</router-link>
        </nav>

        <div class="footerLinks">
          <h3>Services</h3>
          <span>Startup Websites</span>
          <span>Web Applications</span>
          <span>Dashboards</span>
          <span>Ecommerce Platforms</span>
          <span>UI Development</span>
        </div>

        <div class="footerContact">
          <h3>Contact</h3>
          <a href="mailto:graceegbewale@gmail.com" class="contactLink">graceegbewale@gmail.com</a>
          <a href="tel:+2348125911966" class="contactLink">+234 812 591 1966</a>
          <router-link to="/contact" class="footerMainCta">Send a Message</router-link>
        </div>
      </div>

      <div class="footerBottom">
        <p>&copy; 2026 Gracie Creatives. All rights reserved.</p>
        <p>Designed and built by Precious Grace Egbewale.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/about#experience' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Graciecreatives',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.294-1.23 3.294-1.23.656 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/graciecreatives',
    icon: '<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.792-1.75-1.767s.784-1.767 1.75-1.767 1.75.792 1.75 1.767-.784 1.767-1.75 1.767zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.865-3.062-1.865 0-2.151 1.454-2.151 2.958v5.708h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.035 0 3.596 1.998 3.596 4.592v5.603z"/></svg>',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/iamgraciecreatives',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.265-.058 1.645-.07 4.849-.07zm0 3.675a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/></svg>',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/message/OHWB5TWVL35DH1',
    icon: '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.297.347-.497.116-.2.058-.372-.03-.52-.088-.149-.78-1.905-1.09-2.612-.301-.686-.605-.613-.827-.616h-.7c-.225 0-.616.088-.94.444-.324.354-1.238 1.21-1.238 2.951 0 1.742 1.268 3.425 1.445 3.673.176.249 2.5 3.82 6.059 5.356 2.455 1.059 3.054.912 3.606.819.895-.151 1.758-.72 2.006-1.413.248-.694.019-1.217-.074-1.364-.094-.148-.291-.235-.588-.384M12 21a9 9 0 1 0-.001-18.001A9 9 0 0 0 12 21m0-20a11 11 0 0 1 11 11c0 2.63-.927 5.07-2.492 7.02l2.316 6.843-7.143-2.224A10.957 10.957 0 0 1 12 23c-6.07 0-11-4.93-11-11S4.93 1 12 1"/></svg>',
  },
]
</script>

<style scoped>
.siteFooter {
  position: relative;
  overflow: hidden;
  padding: 4rem 1.25rem 1.5rem;
  color: #fff;
  background:
    radial-gradient(circle at 10% 0%, rgba(168, 85, 247, 0.16), transparent 26rem),
    radial-gradient(circle at 88% 30%, rgba(34, 211, 238, 0.1), transparent 24rem),
    linear-gradient(180deg, #05020b 0%, #090215 100%);
}

.siteFooter::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.07) 1px, transparent 1px);
  background-size: 72px 72px;
  opacity: 0.32;
  pointer-events: none;
}

.footerInner {
  position: relative;
  z-index: 1;
  max-width: 75rem;
  margin: 0 auto;
}

.footerGrid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(9rem, 0.65fr) minmax(12rem, 0.75fr) minmax(14rem, 0.85fr);
  gap: 2.5rem;
  align-items: start;
}

.footerBrand {
  display: flex;
  flex-direction: column;
}

.brandMark {
  display: inline-flex;
  width: 11rem;
  margin-bottom: 1rem;
}

.brandMark img {
  width: 100%;
  filter: brightness(0) invert(1);
}

.footerBrand p {
  max-width: 29rem;
  color: rgba(237, 233, 254, 0.72);
  line-height: 1.75;
}

.socialLinks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.5rem;
}

.socialLinks a {
  display: inline-flex;
  width: 2.65rem;
  height: 2.65rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.84);
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease, color 220ms ease;
}

.socialLinks a:hover {
  transform: translateY(-3px);
  border-color: rgba(168, 85, 247, 0.72);
  color: #fff;
  box-shadow: 0 0 26px rgba(168, 85, 247, 0.3);
}

.socialLinks :deep(svg) {
  width: 1.12rem;
  height: 1.12rem;
  fill: currentColor;
}

.footerLinks h3,
.footerContact h3 {
  margin-bottom: 1.05rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.footerLinks a,
.footerLinks span,
.contactLink {
  display: block;
  color: rgba(237, 233, 254, 0.68);
  font-size: 0.94rem;
  line-height: 2.1;
  transition: color 180ms ease, transform 180ms ease;
}

.footerLinks a:hover {
  color: #f0abfc;
  transform: translateX(4px);
}

.footerContact {
  min-width: 0;
}

.footerMainCta {
  display: inline-flex;
  width: fit-content;
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 0 1.25rem;
  border-radius: 999px;
  background: #ffffff;
  color: #5b0f86;
  font-weight: 900;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.24);
  transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
}

.footerMainCta:hover {
  transform: translateY(-2px);
  background: #f5e8ff;
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.3);
}

.contactLink:hover {
  color: #f0abfc;
}

.footerBottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1.6rem;
  padding-top: 1.45rem;
  color: rgba(237, 233, 254, 0.56);
  font-size: 0.88rem;
}

@media (max-width: 1050px) {
  .footerGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .footerGrid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footerBottom {
    display: block;
  }

  .footerBottom p + p {
    margin-top: 0.65rem;
  }
}

@media (max-width: 640px) {
  .siteFooter {
    padding: 3.25rem 1rem 1.4rem;
  }
}
</style>
