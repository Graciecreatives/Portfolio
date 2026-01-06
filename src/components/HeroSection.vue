<template>
  <main>
    <section class="heroSection min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden pt-40 pb-20">
      
      <!-- Animated Small Particles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          v-for="(particle, index) in particles" 
          :key="index"
          class="particle absolute rounded-full bg-white"
          :style="particle.style"
        ></div>
      </div>

      <!-- Content Container -->
      <div class="z-20 px-5 max-w-4xl w-full flex flex-col items-center gap-6 mb-16 relative">
        
        <!-- Badge -->
        <div data-aos="fade-down" class="bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-white text-sm md:text-base rounded-full shadow-lg hover:scale-105 transition-transform">
          Available For Projects
        </div>

        <!-- Heading -->
        <h1 data-aos="fade-up" class="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
          Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 animate-pulse">Precious Grace Egbewale</span> <br>
          <span class="text-2xl md:text-4xl text-gray-200 font-medium">A Fullstack Developer</span>
        </h1>

        <!-- Description -->
        <p data-aos="fade-up" data-aos-delay="100" class="text-base md:text-lg text-gray-100 max-w-2xl drop-shadow-sm font-light">
          I build seamless, scalable, and user-focused digital experiences that merge creativity with functionality. From intuitive websites and web apps to decentralized solutions, I love turning ideas into innovation through clean, efficient code.
        </p>

        <!-- CTAs -->
        <div data-aos="fade-up" data-aos-delay="200" class="flex flex-col md:flex-row gap-4 mt-2">
          <router-link to="" class="viewWorks text-[#9318FA] bg-white hover:bg-gray-100 py-3 px-8 rounded-full font-semibold shadow-md hover:shadow-xl transition-all">
            View My Works
          </router-link>
          <router-link to="" class="contactMe text-white border border-white hover:bg-white/20 py-3 px-8 rounded-full font-semibold transition-all">
            Contact Me
          </router-link>
        </div>

        <!-- Tech Stack Logos (Moved Below Text/CTAs) -->
        <div data-aos="fade-in" data-aos-delay="300" class="flex flex-wrap justify-center gap-4 my-2 max-w-2xl mt-4">
          <div 
            v-for="(tech, index) in techStacks" 
            :key="index" 
            class="flex flex-col items-center gap-1 group"
            :title="tech.name"
          >
            <img 
              :src="tech.logo" 
              :alt="tech.name" 
              class="h-10 w-10 md:h-12 md:w-12 object-contain hover:scale-110 transition-transform bg-white/90 rounded-full p-1 border border-white/20 shadow-md"
              :class="{'bg-black': tech.name === 'GitHub' || tech.name === 'Next.js'}"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Work Carousel -->
      <div class="w-full mt-auto relative z-20">
        <div class="carousel-track flex gap-6 py-4">
          <!-- Render Projects Twice for Infinite Loop -->
          <div 
            v-for="(project, index) in [...projects, ...projects]" 
            :key="index"
            class="carousel-item flex-shrink-0 w-80 md:w-96 h-64 md:h-72 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20"
          >
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" loading="lazy">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Tech Stacks Array
const techStacks = ref([
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: '/src/assets/javascriptLogo.webp' },
  { name: 'Node.js', logo: '/src/assets/nodeLogo.webp' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Tailwind CSS', logo: '/src/assets/tailwingLogo.webp' },
  { name: 'Bootstrap', logo: '/src/assets/bootstrapLogo.webp' },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', logo: '/src/assets/gitLogo.webp' },
  { name: 'GitHub', logo: '/src/assets/githubLogo.webp' },
  { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Wix', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Wix.com_website_logo.svg' }
]);

import CampusCartImage from '../assets/Images/campuscart.webp'
import EAttendanceImage from '../assets/Images/e-attendaceimg.webp'
import GracieFeature from '../assets/Images/GracieFeatur.webp'
import Foodieland from '../assets/Images/foodieland.webp'
import CartDashboard from '../assets/Images/dashboard.webp'

const projects = ref([
  { image: CampusCartImage, title: 'Project 1' },
  { image: EAttendanceImage, title: 'Project 2' },
  { image: GracieFeature, title: 'Project 3' },
  { image: Foodieland, title: 'Project 4' },
  { image: CartDashboard, title: 'Project 5' },
]);

// Particle Generation Logic
const particles = ref([]);

const generateParticles = (count = 35) => {
  const newParticles = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 4 + 2 + 'px'; // 2px to 6px
    newParticles.push({
      style: {
        width: size,
        height: size,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        opacity: Math.random() * 0.5 + 0.1, // 0.1 to 0.6 opacity
        animationDelay: Math.random() * 5 + 's',
        animationDuration: Math.random() * 10 + 10 + 's', // 10s to 20s
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
  background: linear-gradient(135deg, #2D0355 0%, #5B1296 50%, #1E0238 100%);
  position: relative;
}

/* CAROUSEL ANIMATION */
.carousel-track {
  display: flex;
  width: max-content;
  animation: scroll 25s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1720px)); 
  }
}

.carousel-track:hover {
  animation-play-state: paused;
}

@media (min-width: 768px) {
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-2040px)); }
  }
}

/* SMALL PARTICLE ANIMATION */
.particle {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
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
    transform: translateY(-100px) translateX(50px);
    opacity: 0;
  }
}
</style>
