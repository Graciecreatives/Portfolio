<template>
  <section class="py-16 px-5 md:px-20 bg-gray-50">
    <h2 class="text-4xl font-bold text-center mb-6 text-[#9318FA]">My Experience</h2>
    <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      Here’s a quick look at some of the exciting projects, volunteer roles, and professional experiences I’ve taken on as a frontend developer and designer.
    </p>

    <div class="space-y-10">
      <!-- Experience Card -->
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="flex flex-col md:flex-row items-start md:items-center bg-white shadow-lg rounded-xl p-6 gap-6 hover:shadow-2xl transition-shadow"
      >
        <!-- Company Logo / Icon -->
        <div class="flex-shrink-0 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
          <img :src="exp.logo" alt="logo" class="w-10 h-10 object-contain" />
        </div>

        <!-- Content -->
        <div class="flex-1">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 class="text-xl font-semibold text-gray-800">{{ exp.role }}</h3>
            <p class="text-gray-500 text-sm">{{ exp.period }}</p>
          </div>
          <p class="text-gray-600 mb-3 font-medium">{{ exp.company }}</p>
          <p class="text-gray-600 mb-4">{{ exp.description }}</p>

          <!-- Skills -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, i) in exp.skills"
              :key="i"
              class="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import cowrywise from '../assets/Images/cowrywiselogo.png'
import meta from '../assets/Images/meta.png'
import nithub from '../assets/Images/nithub.png'
import tta from '../assets/Images/tta.png'
const experiences = [
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    company: "Gracie Creatives",
    role: "Frontend Developer & Designer",
    period: "Jan 2024 - Present",
    description:
      "Designing and building responsive web interfaces for brands using Vue.js and TailwindCSS, while ensuring accessibility and user experience excellence.",
    skills: ["Vue.js", "TailwindCSS", "Figma", "Responsive Design"],
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    company: "Faith Heroic Generation",
    role: "Wix Website Designer",
    period: "2023 - 2024",
    description:
      "Developed custom Wix websites for businesses and optimized layouts to increase client engagement and conversions.",
    skills: ["Wix Studio", "UI Design", "SEO Optimization"],
  },

 {
  logo: meta,
  company: "Meta Safe Online",
  role: "Volunteer",
  period: "2025 - Present",
  description:
    "Volunteered to promote digital safety and responsible social media usage under the Meta Safe Online initiative, leveraging tech knowledge for online awareness campaigns.",
  skills: ["Community Engagement", "Digital Safety", "Content Strategy"],
},
{
  logo: cowrywise,
  company: "Cowrywise",
  role: "Cowrywise Campus Ambassador",
  period: "2025 - Present",
  description:
    "Representing Cowrywise at TASUED, helping students build financial literacy and encouraging saving and investment habits using digital tools.",
  skills: ["Public Speaking", "Marketing", "Financial Literacy", "Leadership"],
},
{
  logo: nithub,
  company: "NITHUB TASUED",
  role: "Assistant Spokesperson",
  period: "2025 - Present",
  description:
    "Assisting in organizing NITHUB TASUED activities, promoting tech innovation on campus, and supporting student-led projects and events.",
  skills: ["Public Relations", "Leadership", "Communication", "Team Collaboration"],
},

{
  logo: tta,
  company: "TECH TALENT ACADEMY",
  role: "Frontend Developer Intern",
  period: "2025 - Present",
  description:
    "During my SIWES internship at Tech Talent Academy, I gained hands-on experience as a Frontend Developer, contributing to the organization of NITHUB TASUED activities and supporting student-led tech projects. I helped promote innovation on campus and collaborated with a team to execute events and initiatives, strengthening both my technical and soft skills",
  skills: ["Communication", "Team Collaboration", "Vue.js", "TailwindCss", "Reactjs", "Bootstrap", "Javascript", "Creativity"],
},

];
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>
