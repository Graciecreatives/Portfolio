<template>
  <section class="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-white to-transparent opacity-60 pointer-events-none"></div>

    <div class="max-w-4xl mx-auto relative z-10">
      
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-4xl md:text-5xl font-black text-[#9318FA] mb-6 tracking-tight">MY EXPERIENCE</h2>
        <p class="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed font-light">
          A journey through my professional roles, internships, and volunteer work that have shaped my skills as a developer and community leader.
        </p>
        <div class="h-1.5 w-24 bg-[#9318FA] rounded-full mx-auto mt-6"></div>
      </div>

      <!-- Timeline Container -->
      <div class="relative space-y-12 pl-8 md:pl-0">
        <!-- Vertical Line -->
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-purple-100 transform -translate-x-1/2 hidden md:block"></div>
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-purple-100 md:hidden"></div>

        <!-- Experience Item -->
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="relative flex flex-col md:flex-row items-center justify-between w-full group"
          data-aos="fade-up"
        >
          <!-- Timeline Dot (Desktop Center / Mobile Limit) -->
          <div class="absolute left-0 md:left-1/2 w-4 h-4 bg-[#9318FA] rounded-full border-4 border-white shadow-md transform -translate-x-1/2 md:translate-x-[-50%] z-20 mt-6 md:mt-0"></div>

          <!-- Date/Logo Side (Alternating on Desktop) -->
          <div 
            class="hidden md:flex w-5/12 justify-end pr-8"
            :class="{'md:order-1': index % 2 !== 0, 'md:order-3 md:justify-start md:pl-8 md:pr-0': index % 2 === 0}"
          >
             <div class="bg-white p-2 rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
               <img :src="exp.logo" alt="logo" class="w-12 h-12 object-contain rounded-full" />
             </div>
          </div>

          <!-- Content Card -->
          <div 
            class="w-full md:w-5/12 bg-white/80 backdrop-blur-sm border border-white/60 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 pl-12 md:pl-6"
            :class="{'md:order-3': index % 2 !== 0, 'md:order-1 md:text-right': index % 2 === 0}"
          >
             <!-- Mobile Logo Header (Visible only on mobile) -->
             <div class="flex items-center gap-3 mb-4 md:hidden">
               <div class="bg-white p-1.5 rounded-full shadow-sm border border-gray-100 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <img :src="exp.logo" alt="logo" class="w-full h-full object-contain rounded-full" />
               </div>
               <div>
                  <h3 class="text-lg font-bold text-gray-800 leading-tight">{{ exp.role }}</h3>
                  <p class="text-[#9318FA] font-medium text-sm">{{ exp.company }}</p>
               </div>
             </div>

            <!-- Desktop Header -->
            <div class="hidden md:block">
              <span class="inline-block px-3 py-1 bg-purple-50 text-[#9318FA] text-xs font-bold rounded-full mb-2">{{ exp.period }}</span>
              <h3 class="text-xl font-bold text-gray-800 mb-1">{{ exp.role }}</h3>
              <p class="text-[#9318FA] font-medium mb-4">{{ exp.company }}</p>
            </div>

            <!-- Mobile Date -->
            <p class="text-xs font-bold text-gray-400 mb-2 md:hidden uppercase tracking-widest">{{ exp.period }}</p>

            <p class="text-gray-600 text-sm leading-relaxed mb-4 font-light">{{ exp.description }}</p>

            <!-- Skills -->
            <div 
              class="flex flex-wrap gap-2"
              :class="{'md:justify-end': index % 2 === 0}"
            >
              <span
                v-for="(skill, i) in exp.skills"
                :key="i"
                class="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100 font-medium group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import cowrywise from '../assets/Images/logos/cowrywiselogo.png'
import meta from '../assets/Images/logos/meta.png'
import nithub from '../assets/Images/logos/nithub.png'
import tta from '../assets/Images/logos/tta.png'

const experiences = [
  {
    logo: tta,
    company: "TECH TALENT ACADEMY",
    role: "Frontend Developer Intern",
    period: "2025 - Present",
    description: "Gained hands-on experience during SIWES internship, organizing NITHUB TASUED activities and supporting student-led tech projects. Collaborated with teams to promote extensive innovation on campus.",
    skills: ["Vue.js", "React.js", "Tailwind", "Teamwork"],
  },
  {
    logo: nithub,
    company: "NITHUB TASUED",
    role: "Assistant Spokesperson",
    period: "2025 - Present",
    description: "Organizing tech activities and promoting innovation on campus. Supporting student-led projects to foster a collaborative and growing tech community.",
    skills: ["Public Relations", "Leadership", "Communication"],
  },
  {
    logo: cowrywise,
    company: "Cowrywise",
    role: "Campus Ambassador",
    period: "2025 - Present",
    description: "Advocating for financial literacy among students. Organizing seminars and using digital tools to encourage savings and investment culture.",
    skills: ["Marketing", "Finance", "Public Speaking"],
  },
  {
    logo: meta,
    company: "Meta Safe Online",
    role: "Volunteer",
    period: "2025 - Present",
    description: "Promoting digital safety and responsible social media usage. Leveraging technical knowledge to drive awareness campaigns for a safer internet.",
    skills: ["Digital Safety", "Content Strategy"],
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    company: "Gracie Creatives",
    role: "Frontend Developer",
    period: "Jan 2024 - Present",
    description: "Freelance development building responsive websites. Focusing on user experience, accessibility, and modern performance standards.",
    skills: ["Vue.js", "TailwindCSS", "Figma"],
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    company: "Faith Heroic Generation",
    role: "Wix Website Designer",
    period: "2023 - 2024",
    description: "Created custom Wix websites optimized for SEO and conversion. Worked directly with stakeholders to translate business needs into digital solutions.",
    skills: ["Wix Studio", "SEO", "UI Design"],
  },
];
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>
