<template>
  <section class="py-10 px-5 md:px-10 bg-[#f9fafb]">
    <h2 class="text-4xl font-[900] text-center mb-5 text-[#9318FA]">My Projects</h2>
    <p class="text-center max-w-3xl mx-auto mb-10">
      Dive into my portfolio to see some of the websites and applications I’ve crafted.
      Each project reflects my passion for clean design, responsive development, and innovative solutions.
      Your feedback is welcome—let’s connect and share ideas!
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="backdrop-blur-lg bg-white/10 border border-[#9318FA]/50 shadow-lg rounded-xl overflow-hidden flex flex-col cursor-pointer transition-transform transform hover:scale-105 hover:bg-white/20"

      >
        <!-- Live Project Preview -->
        <div class="w-full h-48 overflow-auto border-b border-gray-200">
          <iframe :src="project.liveLink" class="w-full h-full" frameborder="0"></iframe>
        </div>

        <!-- Project Details -->
        <div class="p-5 flex flex-col flex-1">
          <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
          <p class="text-gray-600 mb-4 flex-1 text-justify">{{ project.description }}</p>

          <!-- Skills Used -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="skill in project.skills"
              :key="skill"
              class="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded flex items-center gap-1"
            >
              <!-- Example SVG icon for skill -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ skill }}
            </span>
          </div>

          <!-- Project Link -->
          <a
            :href="project.liveLink"
            target="_blank"
            class="mt-auto bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M14 3h7m0 0v7m0-7L10 14" />
            </svg>
            View Project
          </a>
        </div>
      </div>
    </div>

    <!-- View More Button -->
    <div class="text-center mt-10">
      <router-link
        to="#"
        class="bg-[#9318FA] text-white px-10 py-2 rounded-md inline-block hover:bg-purple-800 transition-colors duration-300 flex items-center justify-center gap-2"
      >
        View More >>>
      </router-link>
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
      "Gracie AI is an intelligent assistant I developed to simplify tasks and enhance productivity. Built with modern AI technologies using Gemini API, it can answer questions, provide insights, and support users in various activities. The platform showcases my skills in AI integration, frontend design, and creating user-friendly digital experiences, making interactions seamless and efficient.",
    liveLink: "https://gracie-ai.vercel.app/",
    skills: ["Vue.js", "Bootsrap", "Firebase"],
  },
  {
    id: 2,
    name: "E-Accomodation Project",
    description:
      "The E-Accommodation homepage is a collaborative project I worked on with my team, designed to provide students with an intuitive platform to find and book accommodation easily. The homepage features a clean layout, responsive design, and clear navigation, ensuring users can quickly access listings, search filters, and relevant information. This project showcases my skills in frontend development, UI/UX design, and teamwork in delivering functional, user-friendly web solutions",
    liveLink: "https://e-accomodation.vercel.app/",
    skills: ["Vue.js", "Tailwind", "Figma"],
  },
  {
    id: 3,
    name: "Psychologist Website",
    description:
      "Vantage Point Website is a clean, professional, and user-friendly website I designed using WordPress for a psychologist’s practice. The site focuses on providing clear information about therapy services, mental health resources, and appointment booking. It features an intuitive layout, calming color scheme, and easy navigation to ensure visitors feel welcomed and supported while exploring mental health services",
    liveLink: "https://vppsych.co.uk/",
    skills: ["Wordpress", "Elementor", "Consultio"],
  },
  {
    id: 4,
    name: "Kingz Music Studio Website",
    description:
      "Kingz Music Studio Website is a modern, responsive, and user-friendly site I designed to showcase the studio’s services, artists, and music production projects. Built with Vue.js and Tailwind CSS, the website features a clean layout, intuitive navigation, and interactive elements to engage visitors. The platform highlights studio offerings, upcoming events, and artist portfolios, providing an immersive experience for music enthusiasts",
    liveLink: "https://kms-theta.vercel.app/",
    skills: ["Vuejs", "TailwindCss"],
  },
  {
    id: 5,
    name: "Gracie Swift VTU WebApp",
    description:
      "Gracie Swift VTU WebApp is a full-stack web application I developed to streamline university-related tasks and services for VTU students. Built with Vue.js, Tailwind CSS, Node.js, Express.js, and MongoDB, the app features a responsive and intuitive interface, secure data handling, and interactive functionality. It allows students to manage tasks efficiently, access important resources, and experience a smooth and user-friendly workflow.",
    liveLink: "https://gracieswift.pxxl.click/",
    skills: ["Vuejs", "TailwindCss", "Nodejs", "Expressjs", "MongoDb"],
  },
  {
    id: 6,
    name: "Foodieland Landing Page",
    description:
      "Foodieland Landing Page is a visually appealing and responsive website I designed to showcase a food delivery platform. Built with Vue.js and Tailwind CSS, the page features a clean layout, engaging visuals, and intuitive navigation to highlight menu items, promotions, and special offers. The landing page aims to attract users, provide key information quickly, and create an inviting first impression for the Foodieland brand.",
    liveLink: "https://gracie-foodieland.vercel.app/",
    skills: ["Vuejs", "TailwindCss"],
  },
]);
</script>
