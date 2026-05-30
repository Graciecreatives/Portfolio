<template>
  <section class="featuredProjects">
    <div class="featuredInner">
      <div class="sectionIntro" data-aos="fade-up">
        <span>Selected Work</span>
        <h2>Featured Projects</h2>
        <p>A quick look at products I have designed and built across web apps, marketplaces, and AI experiences.</p>
      </div>

      <div class="projectGrid">
        <article
          v-for="project in featuredProjects"
          :key="project.name"
          class="projectCard"
          data-aos="zoom-in"
        >
          <div class="projectImageWrap">
            <img :src="project.image" :alt="project.name" loading="lazy">
          </div>

          <div class="projectContent">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>

            <div class="projectTags">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>

            <router-link to="/projects" class="caseStudyBtn">
              View Case Study
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import LadyIfeImage from '../assets/Images/projects/Ladyife.webp'
import DaceImage from '../assets/Images/projects/Dace.webp'
import ElgorithmConceptImage from '../assets/Images/projects/Elgorithm-Concept.webp'

const featuredProjects = [
  {
    name: 'Lady Ife',
    description: 'Professional website for a well-known speaker and public figure.',
    tags: ['Speaker Website', 'Personal Brand', 'Web Design'],
    image: LadyIfeImage,
  },
  {
    name: 'Dace',
    description: 'Private chat app project built for secure digital conversations.',
    tags: ['Chat App', 'Web App', 'Private Messaging'],
    image: DaceImage,
  },
  {
    name: 'Elgorithm Concept',
    description: 'Online tech school website for bootcamp-style digital learning.',
    tags: ['EdTech', 'Bootcamp', 'Website'],
    image: ElgorithmConceptImage,
  },
]
</script>

<style scoped>
.featuredProjects {
  position: relative;
  overflow: hidden;
  padding: 6rem 1.25rem;
  background:
    radial-gradient(circle at 15% 18%, rgba(168, 85, 247, 0.14), transparent 26rem),
    radial-gradient(circle at 86% 45%, rgba(236, 72, 153, 0.12), transparent 24rem),
    linear-gradient(180deg, #05020b 0%, #10031c 55%, #07020d 100%);
}

.featuredProjects::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.09) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px);
  background-size: 66px 66px;
  opacity: 0.36;
  pointer-events: none;
}

.featuredInner {
  position: relative;
  z-index: 1;
  max-width: 75rem;
  margin: 0 auto;
}

.sectionIntro {
  max-width: 44rem;
  margin: 0 auto 3rem;
  text-align: center;
}

.sectionIntro span {
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

.sectionIntro h2 {
  color: #fff;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  font-weight: 900;
  line-height: 1;
}

.sectionIntro p {
  margin-top: 1.1rem;
  color: rgba(237, 233, 254, 0.72);
  font-size: 1.04rem;
  line-height: 1.75;
}

.projectGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.projectCard {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(18px);
  transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
}

.projectCard::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.75), rgba(236, 72, 153, 0.42), rgba(34, 211, 238, 0.34), rgba(168, 85, 247, 0.75));
  background-size: 240% 240%;
  opacity: 0;
  transition: opacity 240ms ease;
  animation: projectBorder 5.5s ease-in-out infinite;
  pointer-events: none;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.projectCard:hover {
  transform: translateY(-8px);
  border-color: rgba(168, 85, 247, 0.62);
  box-shadow: 0 0 38px rgba(168, 85, 247, 0.26), 0 30px 80px rgba(0, 0, 0, 0.38);
}

.projectCard:hover::before {
  opacity: 1;
}

.projectImageWrap {
  height: 15.5rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
}

.projectImageWrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 420ms ease, filter 420ms ease;
}

.projectCard:hover .projectImageWrap img {
  transform: scale(1.06);
  filter: saturate(1.12) brightness(1.04);
}

.projectContent {
  padding: 1.35rem;
}

.projectContent h3 {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 850;
}

.projectContent p {
  margin-top: 0.55rem;
  color: rgba(237, 233, 254, 0.72);
  line-height: 1.55;
  font-size: 0.95rem;
}

.projectTags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.projectTags span {
  border: 1px solid rgba(168, 85, 247, 0.24);
  border-radius: 999px;
  padding: 0.35rem 0.62rem;
  background: rgba(168, 85, 247, 0.12);
  color: rgba(237, 233, 254, 0.86);
  font-size: 0.76rem;
  font-weight: 750;
}

.caseStudyBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.25rem;
  min-height: 2.8rem;
  width: 100%;
  border-radius: 999px;
  background: linear-gradient(100deg, #a855f7, #ec4899 60%, #22d3ee);
  color: #fff;
  font-weight: 850;
  box-shadow: 0 0 24px rgba(168, 85, 247, 0.28);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.caseStudyBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 34px rgba(168, 85, 247, 0.44);
}

@keyframes projectBorder {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@media (max-width: 1024px) {
  .projectGrid {
    grid-template-columns: 1fr;
    max-width: 42rem;
    margin: 0 auto;
  }
}

@media (max-width: 640px) {
  .featuredProjects {
    padding: 4.5rem 1rem;
  }

  .sectionIntro {
    margin-bottom: 2.2rem;
  }

  .projectImageWrap {
    height: 13.5rem;
  }
}
</style>
