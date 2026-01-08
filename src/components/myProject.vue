<template>
  <section class="py-16 px-4 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100/50">
    <div class="max-w-7xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-4xl md:text-5xl font-black text-[#9318FA] mb-6 tracking-tight">MY PROJECTS</h2>
        <p class="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed font-light">
          Dive into my portfolio to see some of the websites and applications I’ve crafted.
          Each project reflects my passion for clean design, responsive development, and innovative solutions.
        </p>
        <div class="h-1.5 w-24 bg-[#9318FA] rounded-full mx-auto mt-6"></div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col hover:-translate-y-2"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <!-- Live Preview Window -->
          <div class="relative h-56 bg-gray-100 overflow-hidden border-b border-gray-100 group-hover:border-purple-100 transition-colors">
             <div class="absolute inset-0 bg-gray-200 animate-pulse" v-if="loading"></div> <!-- Skeleton helper (optional) -->
            <iframe 
              :src="project.liveLink" 
              class="w-[400%] h-[400%] transform scale-[0.25] origin-top-left border-none opacity-90 group-hover:opacity-100 transition-opacity bg-white" 
              title="Project Preview"
              loading="lazy"
            ></iframe>
            <!-- Overlay for click interaction/protection -->
            <div class="absolute inset-0 bg-transparent"></div>
            
            <!-- Floating Link Icon -->
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#9318FA] p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#9318FA] transition-colors">{{ project.name }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-1 text-justify line-clamp-4">{{ project.description }}</p>

            <!-- Tech Stack Pills -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="skill in project.skills"
                :key="skill"
                class="bg-purple-50 text-purple-700 text-xs px-2.5 py-1 rounded-full font-medium border border-purple-100"
              >
                {{ skill }}
              </span>
            </div>

            <!-- Action Button -->
            <a
              :href="project.liveLink"
              target="_blank"
              class="mt-auto w-full border border-[#9318FA] text-[#9318FA] hover:bg-[#9318FA] hover:text-white px-4 py-2.5 rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 group/btn"
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

const projects = ref([
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
/* No extra styles needed */
</style>
