<template>
  <section class="projectsSection">
    <div class="projectsInner">
      
      <!-- Section Header -->
      <div class="projectsHeading" data-aos="fade-down">
        <span>Portfolio</span>
        <h2>MY PROJECTS</h2>
        <p>
          Dive into my portfolio to see some of the websites and applications I’ve crafted.
          Each project reflects my passion for clean design, responsive development, and innovative solutions.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projectsGrid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="projectCard group"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <!-- Live Preview Window -->
          <div class="previewWindow">
            <img
              v-if="project.previewImage"
              :src="project.previewImage"
              :alt="`${project.name} preview`"
              class="previewImage"
              loading="lazy"
            >
            <iframe 
              v-else
              :src="project.liveLink" 
              class="w-[400%] h-[400%] transform scale-[0.25] origin-top-left border-none opacity-90 group-hover:opacity-100 transition-opacity bg-white" 
              title="Project Preview"
              loading="lazy"
            ></iframe>
            <!-- Overlay for click interaction/protection -->
            <div class="absolute inset-0 bg-transparent"></div>
            
            <!-- Floating Link Icon -->
            <div class="previewIcon">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
          </div>

          <!-- Content -->
          <div class="projectContent">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>

            <!-- Tech Stack Pills -->
            <div class="skillList">
              <span
                v-for="skill in project.skills"
                :key="skill"
              >
                {{ skill }}
              </span>
            </div>

            <!-- Action Button -->
            <a
              :href="project.liveLink"
              target="_blank"
              class="projectButton group/btn"
            >
              <span>View Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import DacePreview from '@/assets/Images/projects/Dace.webp'

const projects = ref([
  {
    id: 11,
    name: "Dace",
    description:
      "Dace is a polished web project built with a clean visual direction, responsive layout, and smooth user experience. The site focuses on presenting its brand clearly while keeping navigation simple and engaging.",
    liveLink: "https://dace.lol/",
    previewImage: DacePreview,
    skills: ["Frontend", "Responsive Design", "UI Development"],
  },
  {
    id: 12,
    name: "Lady Ife",
    description:
      "Lady Ife is a personal brand website designed to present a strong digital identity with elegant layouts, clear content structure, and a professional user experience across devices.",
    liveLink: "https://ifeoluwaoyatokun.com/",
    skills: ["Website Design", "Frontend", "Responsive Design"],
  },
  {
    id: 13,
    name: "Elgorithm Concept",
    description:
      "Elgorithm Concept is a modern website created to communicate brand value, services, and digital presence through a clean interface, responsive pages, and focused visual presentation.",
    liveLink: "https://elgorithm.vercel.app/",
    skills: ["Frontend", "Web Design", "Responsive UI"],
  },
  {
    id: 14,
    name: "Zeal World Films",
    description:
      "Zeal World Films is a website built for a media group, designed to present their creative work, brand identity, and film/media services through a clean and accessible digital presence.",
    liveLink: "https://zealworldfilms.com.ng/",
    skills: ["Media Website", "Web Design", "Responsive Design"],
  },
  {
    id: 1,
    name: "Gracie Ai",
    description:
      "Gracie AI is an intelligent assistant I developed to simplify tasks and enhance productivity. Built with modern AI technologies using Gemini API, it can answer questions, provide insights, and support users in various activities. The platform showcases my skills in AI integration, frontend design, and creating user-friendly digital experiences.",
    liveLink: "https://gracie-ai.vercel.app/",
    skills: ["Vue.js", "Bootstrap", "Firebase", "Gemini API"],
  },
  {
    id: 2,
    name: "E-Accommodation",
    description:
      "A collaborative project providing students with an intuitive platform to find and book accommodation. Features a clean layout, responsive design, and search filters for easy navigation.",
    liveLink: "https://e-accomodation.vercel.app/",
    skills: ["Vue.js", "Tailwind", "Figma"],
  },
  {
    id: 3,
    name: "Vantage Point Psychology",
    description:
      "A clean, professional website for a psychologist’s practice. Focuses on clear information about therapy services, featuring an intuitive layout and calming color scheme.",
    liveLink: "https://vppsych.co.uk/",
    skills: ["WordPress", "Elementor", "Consultio"],
  },
  {
    id: 4,
    name: "Kingz Music Studio",
    description:
      "Modern website showcasing studio services, artists, and music production. Features interactive elements and artist portfolios.",
    liveLink: "https://kms-theta.vercel.app/",
    skills: ["Vue.js", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "De Odedeji Family Carol Virtual Program",
    description:
      "De Odedeji Family Carol Service website is a project to showcase the annual family christmas carol service, which includes bible, hymns and order of service",
    liveLink: "https://odedeji.vercel.app",
    skills: ["Vue.js", "Tailwind CSS"],
  },
  {
    id: 6,
    name: "Foodieland",
    description:
      "Visually appealing landing page for a food delivery platform. Features engaging visuals to highlight menus and special offers.",
    liveLink: "https://gracie-foodieland.vercel.app/",
    skills: ["Vue.js", "Tailwind CSS"],
  },
  {
    id: 7,
    name: "TasfuedCart Marketplace",
    description:
      "TasfuedCart is a full-stack e-commerce platform I developed to provide a seamless shopping experience for users. Built with Vue.js, Tailwind CSS, Node.js, Express.js, and MongoDB, the platform features a responsive and intuitive interface, secure data handling, and interactive functionality. It allows users to browse products, make purchases, and manage their orders efficiently, creating a smooth and user-friendly shopping experience.",
    liveLink: "https://tasfuedcart.vercel.app/",
    skills: ["Vuejs", "TailwindCss", "Nodejs", "Expressjs", "MongoDb"],    
  },
  {
    id: 8,
    name: "E-Attendance Project",
    description:
      "E-Attendance project is a fullstack web project which i collaborated with team to simplify the way Attendance is being taken in schools using a Geofenced Logic. The project features a responsive and intuitive interface, secure data handling, and interactive functionality.",
    liveLink: "https://e-attendance.com.ng",
    skills: ["Vuejs", "TailwindCss", "Python", "Django", "MongoDb"],    
  },
  {
    id: 9,
    name: "A birthday website",
    description:
      "A birthday website I developed to provide a seamless shopping experience for users. Built with Vue.js and Tailwind CSS, the website showcases a responsive and intuitive interface",
    liveLink: "https://olamiposi.vercel.app/",
    skills: ["Vuejs", "TailwindCss"],    
  },
   {
    id: 10,
    name: "A Makeup Artist Rate Card",
    description:
      "A Makeup Artist Rate Card is a project developed for a makeup artiste, to showcase their price and also their terms and policy, while implementing the whatsapp api and EmailJs",
    liveLink: "https://geminisignature.vercel.app/",
    skills: ["Vuejs", "TailwindCss", "WhatsappApi", "EmailJs"],    
  }
]);
</script>

<style scoped>
.projectsSection {
  position: relative;
  overflow: hidden;
  padding: 9rem 1.25rem 5rem;
  background:
    radial-gradient(circle at 16% 18%, rgba(236, 72, 153, 0.16), transparent 25rem),
    radial-gradient(circle at 82% 25%, rgba(34, 211, 238, 0.12), transparent 24rem),
    linear-gradient(135deg, #09030f 0%, #210533 52%, #05020b 100%);
}

.projectsSection::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34, 211, 238, 0.16) 1px, transparent 1px);
  background-size: 64px 64px;
  background-position: center top;
  opacity: 0.48;
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.24));
  pointer-events: none;
}

.projectsInner {
  position: relative;
  z-index: 1;
  max-width: 80rem;
  margin: 0 auto;
}

.projectsHeading {
  max-width: 48rem;
  margin: 0 auto 4rem;
  text-align: center;
}

.projectsHeading span {
  display: inline-block;
  margin-bottom: 1rem;
  color: #67e8f9;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.projectsHeading h2 {
  color: #ffffff;
  font-size: clamp(2.55rem, 5vw, 5rem);
  font-weight: 950;
  line-height: 1;
}

.projectsHeading p {
  margin-top: 1.25rem;
  color: rgba(237, 233, 254, 0.76);
  font-size: 1.05rem;
  line-height: 1.8;
}

.projectsGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.75rem;
}

.projectCard {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.4rem;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 0 0 1px rgba(168, 85, 247, 0.14),
    0 0 24px rgba(168, 85, 247, 0.16),
    0 18px 48px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(16px);
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.projectCard::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, rgba(20, 184, 166, 0.28), transparent 28%, rgba(168, 85, 247, 0.32), transparent 68%, rgba(236, 72, 153, 0.26));
  opacity: 0;
  transition: opacity 220ms ease;
  pointer-events: none;
}

.projectCard:hover {
  transform: translateY(-0.5rem);
  border-color: rgba(236, 72, 153, 0.42);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.16),
    0 0 30px rgba(168, 85, 247, 0.28),
    0 0 54px rgba(34, 211, 238, 0.12),
    0 24px 58px rgba(0, 0, 0, 0.34);
}

.projectCard:hover::before {
  opacity: 1;
}

.previewWindow,
.projectContent {
  position: relative;
  z-index: 1;
}

.previewWindow {
  height: 14rem;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.11);
  background: rgba(255, 255, 255, 0.08);
}

.previewImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 700ms ease;
}

.projectCard:hover .previewImage {
  transform: scale(1.06);
}

.previewIcon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: grid;
  width: 2.35rem;
  height: 2.35rem;
  place-items: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #9318fa;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(0.5rem);
  transition: opacity 220ms ease, transform 220ms ease;
}

.projectCard:hover .previewIcon {
  opacity: 1;
  transform: translateY(0);
}

.projectContent {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;
}

.projectContent h3 {
  margin-bottom: 0.85rem;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 900;
  transition: color 180ms ease;
}

.projectCard:hover .projectContent h3 {
  color: #f0abfc;
}

.projectContent p {
  flex: 1;
  display: -webkit-box;
  margin-bottom: 1.4rem;
  overflow: hidden;
  color: rgba(237, 233, 254, 0.72);
  font-size: 0.9rem;
  line-height: 1.7;
  text-align: left;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.skillList {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.4rem;
}

.skillList span {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(237, 233, 254, 0.82);
  padding: 0.3rem 0.65rem;
  font-size: 0.75rem;
  font-weight: 700;
}

.projectButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: 100%;
  margin-top: auto;
  border: 1px solid rgba(168, 85, 247, 0.55);
  border-radius: 0.9rem;
  background: rgba(168, 85, 247, 0.12);
  color: #ffffff;
  padding: 0.75rem 1rem;
  font-weight: 850;
  transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
}

.projectButton:hover {
  background: linear-gradient(100deg, #9318fa, #ec4899);
  box-shadow: 0 0 26px rgba(168, 85, 247, 0.32);
}

@media (max-width: 1040px) {
  .projectsGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .projectsSection {
    padding: 8rem 1rem 4rem;
  }

  .projectsGrid {
    grid-template-columns: 1fr;
  }
}
</style>
