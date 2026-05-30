<template>
  <section class="toolsMarquee" aria-label="Tools and languages">
    <div class="marqueeInner">
      <div class="marqueeTrack marqueeLeft">
        <div class="marqueeGroup" v-for="copy in 4" :key="`top-${copy}`">
          <article
            v-for="tool in firstRowTools"
            :key="`${copy}-${tool.name}`"
            class="toolBox"
            :title="tool.name"
          >
            <img :src="tool.logo" :alt="tool.name" loading="lazy">
            <span>{{ tool.name }}</span>
          </article>
        </div>
      </div>

      <div class="marqueeTrack marqueeRight">
        <div class="marqueeGroup" v-for="copy in 4" :key="`bottom-${copy}`">
          <article
            v-for="tool in secondRowTools"
            :key="`${copy}-${tool.name}`"
            class="toolBox"
            :title="tool.name"
          >
            <img :src="tool.logo" :alt="tool.name" loading="lazy">
            <span>{{ tool.name }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import JavaScriptLogo from '@/assets/icons/tools/javascriptLogo.webp'
import TailwindLogo from '@/assets/icons/tools/tailwingLogo.webp'
import BootstrapLogo from '@/assets/icons/tools/bootstrapLogo.webp'
import GitLogo from '@/assets/icons/tools/gitLogo.webp'
import GitHubLogo from '@/assets/icons/tools/githubLogo.webp'
import NodeLogo from '@/assets/icons/tools/nodeLogo.webp'

const firstRowTools = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: JavaScriptLogo },
  { name: 'Vue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', logo: TailwindLogo },
  { name: 'Bootstrap', logo: BootstrapLogo },
  { name: 'Git', logo: GitLogo },
]

const secondRowTools = [
  { name: 'GitHub', logo: GitHubLogo },
  { name: 'Node.js', logo: NodeLogo },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Solidity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
]
</script>

<style scoped>
.toolsMarquee {
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: grid;
  gap: 1rem;
  padding: 3rem 0;
  background: transparent;
}

.toolsMarquee::before {
  display: none;
}

.marqueeInner {
  position: relative;
  z-index: 2;
  overflow: hidden;
  display: grid;
  gap: 1rem;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 0;
}

.toolsMarquee::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  width: min(10rem, 22vw);
  pointer-events: none;
}

.toolsMarquee::after {
  right: 0;
  background: linear-gradient(270deg, #0b0313, transparent);
}

.marqueeTrack {
  display: flex;
  width: max-content;
}

.marqueeGroup {
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
  padding-right: 1rem;
}

.marqueeLeft {
  animation: marqueeLeft 32s linear infinite;
}

.marqueeRight {
  animation: marqueeRight 32s linear infinite;
}

.toolBox {
  position: relative;
  display: grid;
  width: 7.2rem;
  height: 6rem;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.065);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 18px 40px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(16px);
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
}

.toolBox img {
  width: 2.8rem;
  height: 2.8rem;
  object-fit: contain;
  filter: grayscale(1) brightness(0) invert(1);
  opacity: 0.86;
  transition: filter 180ms ease, opacity 180ms ease, transform 180ms ease;
}

.toolBox span {
  position: absolute;
  left: 50%;
  bottom: 0.55rem;
  transform: translateX(-50%) translateY(0.35rem);
  width: calc(100% - 1rem);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 850;
  text-align: center;
  opacity: 0;
  transition: opacity 180ms ease, transform 180ms ease;
}

.toolBox:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.11);
  box-shadow: 0 20px 44px rgba(168, 85, 247, 0.18);
}

.toolBox:hover img {
  filter: none;
  opacity: 1;
  transform: translateY(-0.45rem) scale(1.04);
}

.toolBox:hover span {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.toolsMarquee:hover .marqueeLeft,
.toolsMarquee:hover .marqueeRight {
  animation-play-state: paused;
}

@keyframes marqueeLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-25%);
  }
}

@keyframes marqueeRight {
  from {
    transform: translateX(-25%);
  }

  to {
    transform: translateX(0);
  }
}

@media (max-width: 640px) {
  .toolsMarquee {
    padding: 2.4rem 0;
  }

  .marqueeInner {
    gap: 0.75rem;
    padding: 0;
  }

  .marqueeGroup {
    gap: 0.75rem;
    padding-right: 0.75rem;
  }

  .toolBox {
    width: 5.8rem;
    height: 5.2rem;
    border-radius: 0.85rem;
  }

  .toolBox img {
    width: 2.35rem;
    height: 2.35rem;
  }
}
</style>
