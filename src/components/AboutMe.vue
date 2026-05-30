<template>
  <section class="aboutSection">
    <!-- Left Content -->
    <div class="aboutContent" data-aos="fade-right">
      <div class="sectionHeader">
        <span>About Me</span>
        <h2>The person behind the products.</h2>
        <p>
          I combine product thinking, frontend craft, backend logic, and community leadership to build useful digital experiences.
        </p>
      </div>

      <!-- Modern Pill Tabs -->
      <div class="tabList">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="tabButton"
          :class="activeTab === tab
            ? 'activeTab'
            : 'inactiveTab'"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Tab Content with Transition -->
      <transition name="fade" mode="out-in">
        <div :key="activeTab" class="tabPanel">
          
          <!-- MYSELF TAB -->
          <div v-if="activeTab === 'MYSELF'" class="space-y-6">
            <p>
              Hi, I’m <strong>Egbewale Precious Grace</strong>, a creative full-stack developer and website designer focused on building modern, scalable websites and web applications that feel polished, fast, and easy to use.
            </p>
            <p>
              Beyond development, I bring a strong creative and strategic mindset to every project, making sure each solution is visually engaging, functional, and aligned with real business goals.
            </p>
            <p>
              I am currently the <strong>NITHUB Campus Assistant Lead</strong> and a <strong>Cowrywise Ambassador</strong>, and I enjoy helping other developers grow while working with brands, startups, and entrepreneurs to build future-ready digital products.
            </p>
            
            <div class="pt-4">
               <router-link
                to="/contact"
                class="aboutCta"
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
            <h3>Tai Solarin University of Education (TASUED)</h3>
            <p>
              I’m currently in my <strong>4th year studying Computer Science</strong> at Tai Solarin University of Education, where I continue to strengthen my foundation in software engineering, data structures, databases, systems thinking, and practical problem-solving.
            </p>
            <p>
              My academic journey has helped me connect theory with real-world development work, from building responsive interfaces to understanding backend logic, application structure, and how technology can solve everyday problems for people and businesses.
            </p>
            <ul>
              <li>Computer Science fundamentals, algorithms, and problem-solving</li>
              <li>Frontend development with modern web technologies</li>
              <li>Backend development, databases, and application logic</li>
              <li>UI/UX design, product thinking, and user-centered interfaces</li>
              <li>Web3, blockchain technologies, and emerging digital systems</li>
            </ul>
          </div>
        </div>
      </transition>
    </div>

    <!-- Right Image (Carousel) -->
    <div class="aboutImageCarousel" data-aos="fade-left">
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
import Img1 from '../assets/Images/about/ADE_88903.webp'
import Img2 from '../assets/Images/about/ADE_88543.webp'
import Img3 from '../assets/Images/about/ADE_88383.webp'
import Img4 from '../assets/Images/about/ADE_88703.webp'

const tabs = ["MYSELF", "EDUCATION"];
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
</script>

<style scoped>
.aboutSection {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.92fr);
  gap: 4rem;
  align-items: center;
  max-width: 75rem;
  margin: 0 auto;
  padding: 5rem 1.25rem;
}

.aboutContent {
  position: relative;
  z-index: 1;
  min-width: 0;
}

.sectionHeader {
  margin-bottom: 2rem;
}

.sectionHeader span {
  display: inline-block;
  margin-bottom: 0.8rem;
  color: #9318fa;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.sectionHeader h2 {
  color: #ffffff;
  font-size: clamp(2.3rem, 4vw, 4rem);
  font-weight: 950;
  line-height: 1.02;
}

.sectionHeader p {
  max-width: 42rem;
  margin-top: 1rem;
  color: rgba(237, 233, 254, 0.72);
  font-size: 1rem;
  line-height: 1.8;
}

.tabList {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.4rem;
}

.tabButton {
  border-radius: 999px;
  padding: 0.72rem 1.25rem;
  font-size: 0.92rem;
  font-weight: 900;
  transition: transform 180ms ease, background 180ms ease, color 180ms ease, box-shadow 180ms ease;
  white-space: nowrap;
}

.activeTab {
  background: #9318fa;
  color: #fff;
  box-shadow: 0 14px 30px rgba(147, 24, 250, 0.24);
}

.inactiveTab {
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: rgba(255, 255, 255, 0.07);
  color: rgba(237, 233, 254, 0.76);
}

.inactiveTab:hover {
  background: rgba(168, 85, 247, 0.16);
  color: #ffffff;
}

.tabPanel {
  min-height: 22rem;
}

.tabPanel p {
  color: rgba(237, 233, 254, 0.74);
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.9;
  text-align: left;
}

.tabPanel strong {
  color: #ffffff;
  font-weight: 900;
}

.tabPanel h3 {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 900;
}

.tabPanel ul {
  display: grid;
  gap: 0.8rem;
  padding-left: 1.2rem;
  color: rgba(237, 233, 254, 0.74);
  font-size: 1.02rem;
  line-height: 1.75;
  list-style: disc;
}

.aboutCta {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  border-radius: 999px;
  background: linear-gradient(100deg, #9318fa, #ec4899);
  color: #fff;
  padding: 0.9rem 1.45rem;
  font-weight: 900;
  box-shadow: 0 16px 36px rgba(147, 24, 250, 0.28);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.aboutCta:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 42px rgba(147, 24, 250, 0.36);
}

.aboutImageCarousel {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 42rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 1.4rem;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34), 0 0 44px rgba(168, 85, 247, 0.12);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .aboutSection {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .aboutImageCarousel {
    height: 34rem;
  }
}

@media (max-width: 520px) {
  .aboutSection {
    padding: 3.2rem 1rem;
  }

  .tabPanel {
    min-height: auto;
  }

  .aboutImageCarousel {
    height: 28rem;
    border-radius: 1rem;
  }
}
</style>
