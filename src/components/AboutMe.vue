<template>
  <section class="flex flex-col md:flex-row gap-12 md:gap-16 md:px-12 px-6 py-16 bg-white/50 backdrop-blur-sm rounded-3xl my-10 mx-4 md:mx-10 shadow-sm border border-white/40">
    <!-- Left Content -->
    <div class="md:w-1/2 w-full flex flex-col justify-center" data-aos="fade-right">
      <div class="mb-8">
        <h2 class="text-4xl md:text-5xl font-black text-[#9318FA] tracking-tight mb-2">ABOUT ME</h2>
        <div class="h-1.5 w-20 bg-[#9318FA] rounded-full"></div>
      </div>

      <!-- Modern Pill Tabs -->
      <div class="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="px-6 py-2.5 rounded-full text-sm f md:text-base font-bold transition-all duration-300 transform"
          :class="activeTab === tab
            ? 'bg-[#9318FA] text-white shadow-lg scale-105'
            : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-[#9318FA]'"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Tab Content with Transition -->
      <transition name="fade" mode="out-in">
        <div :key="activeTab" class="min-h-[300px]">
          
          <!-- MYSELF TAB -->
          <div v-if="activeTab === 'MYSELF'" class="space-y-6">
            <p class="text-gray-600 leading-loose text-lg font-light text-left">
              Hi, I’m <strong>Egbewale Precious Grace</strong>, a creative full-stack developer and website designer passionate about building modern, scalable websites and web applications that deliver exceptional user experiences. I specialize in developing responsive, high-performance digital products using modern technologies such as <strong>Vue.js, Tailwind CSS</strong>, and other cutting-edge tools.
            </p>
            <p class="text-gray-600 leading-loose text-lg font-light text-left">
              Beyond development, I bring a strong creative and strategic mindset to every project, ensuring each solution is visually engaging, functional, and aligned with business goals. I am currently the <strong>NITHUB Campus Assistant Lead</strong> and a <strong>Cowrywise Ambassador</strong>.
            </p>
            <p class="text-gray-600 leading-loose text-lg font-light text-left">
              Driven by innovation, attention to detail, and impact, I work with brands, startups, and entrepreneurs to build future-ready digital solutions.
            </p>
            
            <div class="pt-4">
               <router-link
                to="#"
                class="inline-flex items-center gap-2 bg-[#9318FA] text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <span>Get in Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- EDUCATION TAB -->
          <div v-if="activeTab === 'EDUCATION'" class="space-y-6">
            <h3 class="text-xl font-bold text-gray-800">Tai Solarin University of Education (TASUED)</h3>
            <p class="text-gray-600 leading-loose text-lg font-light text-left">
              I’m currently in my <strong>3rd year of Computer Science</strong>, building a strong foundation in programming and problem-solving.
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-lg">
              <li>Frontend Development (Vue, React, HTML, CSS)</li>
              <li>UI/UX Design (Figma)</li>
              <li>Web3 & Blockchain Technologies</li>
            </ul>
          </div>

          <!-- SKILLS TAB -->
          <div v-if="activeTab === 'SKILLS'">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div
                v-for="(skill, index) in skills"
                :key="index"
                class="flex flex-col items-center gap-3 group p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div class="h-16 w-16 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-50">
                  <img :src="skill.logo" :alt="skill.name" class="w-full h-full object-contain">
                </div>
                <span class="text-sm font-bold text-gray-600 group-hover:text-[#9318FA] transition-colors">{{ skill.name }}</span>
              </div>
            </div>
          </div>

        </div>
      </transition>
    </div>

    <!-- Right Image (Carousel) -->
    <div class="md:w-1/2 w-full flex justify-center items-center relative h-[600px] md:h-[650px] overflow-hidden rounded-2xl shadow-2xl border-4 border-white/50" data-aos="fade-left">
      <div class="absolute z-10 pointer-events-none"></div>
      <div
        v-for="(img, index) in aboutImages"
        :key="index"
        class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out transform scale-105"
        :class="{'opacity-100 z-0': activeImage === index, 'opacity-0 -z-10': activeImage !== index}"
      >
        <img :src="img" class="w-full h-full object-cover transition-transform duration-[10000ms] ease-linear hover:scale-110" alt="Grace" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Import Images
import Img1 from '../assets/Images/ADE_88903.webp'
import Img2 from '../assets/Images/ADE_88543.webp'
import Img3 from '../assets/Images/ADE_88383.webp'
import Img4 from '../assets/Images/ADE_88703.webp'

const tabs = ["MYSELF", "EDUCATION", "SKILLS"];
const activeTab = ref("MYSELF");

// Carousel Logic
const aboutImages = ref([Img1, Img2, Img3, Img4]);
const activeImage = ref(0);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    activeImage.value = (activeImage.value + 1) % aboutImages.value.length;
  }, 4000); // Change image every 4 seconds
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const skills = ref([
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', logo: '/src/assets/tailwingLogo.webp' },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: '/src/assets/javascriptLogo.webp' },
  { name: 'Node.js', logo: '/src/assets/nodeLogo.webp' },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Solidity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
  { name: 'Git', logo: '/src/assets/gitLogo.webp' },
  { name: 'GitHub', logo: '/src/assets/githubLogo.webp' },
  { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Wix', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Wix.com_website_logo.svg' }
]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Hide scrollbar for tabs */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
