<template>
  <section class="toolsSection">
    <div class="aurora auroraOne"></div>
    <div class="aurora auroraTwo"></div>
    <div class="aurora auroraThree"></div>

    <div class="toolsInner">
      <div class="sectionHeading" data-aos="fade-up">
        <span>Toolbox</span>
        <h2>Tools I use to build modern products</h2>
        <p>
          A practical stack for fast interfaces, reliable APIs, databases, deployments, CMS work, and blockchain features.
        </p>
      </div>

      <div class="toolsGrid">
        <article
          v-for="(tool, index) in tools"
          :key="tool.name"
          class="toolCard"
          :style="{ '--delay': `${(index % 8) * 0.22}` }"
          data-aos="zoom-in"
          :data-aos-delay="(index % 4) * 80"
        >
          <div class="toolIcon">
            <img v-if="tool.logo" :src="tool.logo" :alt="tool.name" loading="lazy">
            <span v-else>{{ tool.short }}</span>
          </div>
          <div>
            <h3>{{ tool.name }}</h3>
            <p>{{ tool.note }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import JavaScriptLogo from '../assets/icons/tools/javascriptLogo.webp'
import TailwindLogo from '../assets/icons/tools/tailwingLogo.webp'
import BootstrapLogo from '../assets/icons/tools/bootstrapLogo.webp'
import GitLogo from '../assets/icons/tools/gitLogo.webp'
import GitHubLogo from '../assets/icons/tools/githubLogo.webp'
import NodeLogo from '../assets/icons/tools/nodeLogo.webp'

const tools = [
  { name: 'Vue', note: 'Interactive frontend apps with reusable components.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Nuxt', note: 'SEO-friendly Vue apps, routing, SSR, and fullstack features.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'Nitro', note: 'Server routes, APIs, and deployment-ready backend logic.', short: 'N' },
  { name: 'React.js', note: 'Modern component-driven interfaces and dashboards.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', note: 'Fast responsive styling with clean utility classes.', logo: TailwindLogo },
  { name: 'Bootstrap', note: 'Reliable layouts and UI components for quick builds.', logo: BootstrapLogo },
  { name: 'HTML5', note: 'Accessible structure for every web experience.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', note: 'Custom layouts, animations, and polished visual systems.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', note: 'Version control for clean, trackable development.', logo: GitLogo },
  { name: 'GitHub', note: 'Code hosting, collaboration, and project workflows.', logo: GitHubLogo },
  { name: 'Cloudflare', note: 'DNS, speed, security, and edge deployment support.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
  { name: 'MongoDB', note: 'Flexible NoSQL storage for app data and APIs.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', note: 'Structured relational data for serious products.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Node.js', note: 'JavaScript backend services and server logic.', logo: NodeLogo },
  { name: 'Express.js', note: 'API routes, middleware, and backend architecture.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'WordPress', note: 'CMS websites, content pages, and client-friendly editing.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'PHP', note: 'Server-side features for CMS and web projects.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Solidity', note: 'Smart contracts and Web3 application logic.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
  { name: 'JavaScript', note: 'Core language for frontend and backend features.', logo: JavaScriptLogo },
]
</script>

<style scoped>
.toolsSection {
  position: relative;
  overflow: hidden;
  padding: 6rem 1.25rem;
  background:
    radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.18), transparent 38rem),
    linear-gradient(180deg, #03020a 0%, #12001f 48%, #05020b 100%);
  isolation: isolate;
}

.toolsSection::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px);
  background-size: 62px 62px;
  opacity: 0.42;
  pointer-events: none;
}

.aurora {
  position: absolute;
  z-index: 1;
  border-radius: 999px;
  filter: blur(78px);
  opacity: 0.36;
  pointer-events: none;
  mix-blend-mode: screen;
}

.auroraOne {
  width: 34rem;
  height: 20rem;
  top: 12%;
  left: -8%;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(34, 211, 238, 0.4));
  animation: auroraFloatOne 18s ease-in-out infinite alternate;
}

.auroraTwo {
  width: 38rem;
  height: 24rem;
  right: -10%;
  top: 28%;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.7), rgba(99, 102, 241, 0.48));
  animation: auroraFloatTwo 22s ease-in-out infinite alternate;
}

.auroraThree {
  width: 44rem;
  height: 18rem;
  left: 18%;
  bottom: 4%;
  background: linear-gradient(90deg, rgba(6, 182, 212, 0.42), rgba(168, 85, 247, 0.52), rgba(236, 72, 153, 0.34));
  animation: auroraFloatThree 26s ease-in-out infinite alternate;
}

.toolsInner {
  position: relative;
  z-index: 3;
  max-width: 75rem;
  margin: 0 auto;
}

.sectionHeading {
  max-width: 46rem;
  margin: 0 auto 3rem;
  text-align: center;
}

.sectionHeading span {
  display: inline-flex;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  padding: 0.48rem 0.95rem;
  color: #f0abfc;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.07);
}

.sectionHeading h2 {
  color: #fff;
  font-size: clamp(2.35rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1;
}

.sectionHeading p {
  margin-top: 1.15rem;
  color: rgba(237, 233, 254, 0.76);
  font-size: 1.05rem;
  line-height: 1.8;
}

.toolsGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.75rem;
}

.toolCard {
  position: relative;
  overflow: hidden;
  min-height: 10.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.15rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.045));
  padding: 1.35rem;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    0 0 0 1px rgba(168, 85, 247, 0.16),
    0 0 22px rgba(168, 85, 247, 0.16),
    0 18px 44px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(18px);
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.toolCard::before {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: 1;
  border-radius: inherit;
  background: linear-gradient(145deg, rgba(16, 5, 31, 0.9), rgba(12, 5, 24, 0.78));
  pointer-events: none;
}

.toolCard::after {
  content: "";
  position: absolute;
  inset: -55%;
  z-index: 0;
  background:
    conic-gradient(
      from 0deg,
      rgba(168, 85, 247, 0.12),
      rgba(139, 92, 246, 0.95),
      rgba(236, 72, 153, 0.88),
      rgba(59, 130, 246, 0.86),
      rgba(34, 211, 238, 0.94),
      rgba(168, 85, 247, 0.12),
      rgba(168, 85, 247, 0.12)
    );
  opacity: 0.72;
  filter: blur(2px);
  animation: rotateGradientBorder 7s linear infinite;
  animation-delay: calc(var(--delay, 0) * 1s);
  pointer-events: none;
}

.toolCard:hover {
  transform: translateY(-6px);
  border-color: rgba(168, 85, 247, 0.72);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 0 30px rgba(168, 85, 247, 0.34),
    0 0 58px rgba(34, 211, 238, 0.14),
    0 22px 50px rgba(0, 0, 0, 0.32);
}

.toolCard:hover::after {
  opacity: 0.98;
  filter: blur(1px);
}

.toolIcon {
  position: relative;
  z-index: 2;
  display: flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.11);
  color: #fff;
  font-weight: 900;
  box-shadow: 0 0 22px rgba(168, 85, 247, 0.18);
}

.toolIcon img {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}

.toolCard h3 {
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 1rem;
  font-weight: 850;
}

.toolCard p {
  position: relative;
  z-index: 2;
  margin-top: 0.45rem;
  color: rgba(237, 233, 254, 0.7);
  font-size: 0.87rem;
  line-height: 1.55;
}

@keyframes rotateGradientBorder {
  to {
    transform: rotate(360deg);
  }
}

@keyframes auroraFloatOne {
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  100% { transform: translate3d(9rem, 3rem, 0) rotate(10deg); }
}

@keyframes auroraFloatTwo {
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  100% { transform: translate3d(-7rem, 5rem, 0) rotate(-8deg); }
}

@keyframes auroraFloatThree {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% {
    opacity: 0.44;
  }
  100% { transform: translate3d(5rem, -3rem, 0) scale(1.08); }
}

@media (max-width: 1024px) {
  .toolsGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .toolsSection {
    padding: 4.5rem 1rem;
  }

  .toolsGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.15rem;
  }
}

@media (max-width: 520px) {
  .toolsGrid {
    grid-template-columns: 1fr;
  }
}
</style>
