<template>
  <section id="experience" class="py-20 px-6 md:px-20 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-90 pointer-events-none"></div>

    <div class="experienceInner relative z-10">
      
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-4xl md:text-5xl font-black text-[#9318FA] mb-6 tracking-tight">MY EXPERIENCE</h2>
        <p class="max-w-2xl mx-auto text-violet-100/70 text-lg leading-relaxed font-light">
          A journey through my professional roles, internships, and volunteer work that have shaped my skills as a developer and community leader.
        </p>
        <div class="h-1.5 w-24 bg-[#9318FA] rounded-full mx-auto mt-6"></div>
      </div>

      <!-- Timeline Container -->
      <div class="relative space-y-12 pl-8 md:pl-0">
        <!-- Vertical Line -->
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 transform -translate-x-1/2 hidden md:block"></div>
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-white/10 md:hidden"></div>

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
             <div class="experienceLogo">
               <img :src="exp.logo" alt="logo" class="w-12 h-12 object-contain rounded-full" />
             </div>
          </div>

          <!-- Content Card -->
          <div 
            class="experienceCard w-full md:w-5/12 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 pl-12 md:pl-6"
            :class="{'md:order-3': index % 2 !== 0, 'md:order-1 md:text-right': index % 2 === 0}"
          >
             <!-- Mobile Logo Header (Visible only on mobile) -->
             <div class="flex items-center gap-3 mb-4 md:hidden">
              <div class="experienceLogo mobileLogo">
                  <img :src="exp.logo" alt="logo" class="w-full h-full object-contain rounded-full" />
               </div>
               <div>
                  <h3 class="text-lg font-bold text-white leading-tight">{{ exp.role }}</h3>
                  <p class="text-[#9318FA] font-medium text-sm">{{ exp.company }}</p>
               </div>
             </div>

            <!-- Desktop Header -->
            <div class="hidden md:block">
              <span class="inline-block px-3 py-1 bg-white/10 text-fuchsia-200 text-xs font-bold rounded-full mb-2">{{ exp.period }}</span>
              <h3 class="text-xl font-bold text-white mb-1">{{ exp.role }}</h3>
              <p class="text-[#9318FA] font-medium mb-4">{{ exp.company }}</p>
            </div>

            <!-- Mobile Date -->
            <p class="text-xs font-bold text-violet-200/70 mb-2 md:hidden uppercase tracking-widest">{{ exp.period }}</p>

            <p class="text-violet-100/70 text-sm leading-relaxed mb-4 font-light">{{ exp.description }}</p>

            <!-- Skills -->
            <div 
              class="flex flex-wrap gap-2"
              :class="{'md:justify-end': index % 2 === 0}"
            >
              <span
                v-for="(skill, i) in exp.skills"
                :key="i"
                class="px-2.5 py-1 bg-white/[0.08] text-violet-100/75 text-xs rounded-md border border-white/10 font-medium group-hover:bg-purple-500/15 group-hover:text-white transition-colors"
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
import cowrywise from '../assets/Images/logos/cowrywiselogo.webp'
import meta from '../assets/Images/logos/meta.webp'
import nithub from '../assets/Images/logos/nithub.webp'
import tta from '../assets/Images/logos/tta.webp'
import nebulaLogo from '../assets/brand/the-nebula-logo1.webp'
import devsOnDemandLogo from '../assets/brand/Devsondemand.webp'
import figmaLogo from '../assets/icons/tools/figmaLogo.webp'
import javascriptLogo from '../assets/icons/tools/javascriptLogo.webp'

const experiences = [
  {
    logo: nebulaLogo,
    company: "Nebula",
    role: "WordPress Specialist",
    period: "Present",
    description: "Building, customizing, and maintaining WordPress websites with a focus on clean layouts, responsive pages, content structure, and practical business needs.",
    skills: ["WordPress", "Web Design", "CMS", "Responsive Design"],
  },
  {
    logo: devsOnDemandLogo,
    company: "Devs on Demand",
    role: "Fullstack Developer",
    period: "Present",
    description: "Developing fullstack web solutions across frontend interfaces and backend logic, supporting product features, responsive user experiences, and scalable application workflows.",
    skills: ["Fullstack", "Frontend", "Backend", "Web Apps"],
  },
  {
    logo: "https://static.cdnlogo.com/logos/g/65/gdg-google-developer-group.svg",
    company: "Google Developer Groups",
    role: "Event Volunteer",
    period: "2026",
    description: "Volunteered at a GDG event in school, supporting event coordination, attendee engagement, and community activities that encouraged learning, collaboration, and developer growth.",
    skills: ["Volunteering", "Community", "Event Support", "Developer Relations"],
  },
  {
    logo: tta,
    company: "TECH TALENT ACADEMY",
    role: "Frontend Developer Intern",
    period: "2025",
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
    logo: javascriptLogo,
    company: "Gracie Creatives",
    role: "Frontend Developer",
    period: "Jan 2024 - Present",
    description: "Freelance development building responsive websites. Focusing on user experience, accessibility, and modern performance standards.",
    skills: ["Vue.js", "TailwindCSS", "Figma"],
  },
  {
    logo: figmaLogo,
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
  position: relative;
  scroll-margin-top: 80px;
  background:
    radial-gradient(circle at 14% 18%, rgba(236, 72, 153, 0.1), transparent 24rem),
    linear-gradient(180deg, #05020b 0%, #0b0313 100%);
}

.experienceInner {
  width: min(100%, 75rem);
  margin: 0 auto;
}

.experienceCard {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04));
  backdrop-filter: blur(16px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 0 0 1px rgba(168, 85, 247, 0.14),
    0 0 24px rgba(168, 85, 247, 0.18),
    0 18px 48px rgba(0, 0, 0, 0.24);
}

.experienceCard::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  background:
    linear-gradient(120deg, rgba(20, 184, 166, 0.32), transparent 26%, rgba(168, 85, 247, 0.36), transparent 68%, rgba(236, 72, 153, 0.3));
  opacity: 0.42;
  animation: neonPulse 4s ease-in-out infinite;
  pointer-events: none;
}

.experienceCard::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(236, 72, 153, 0.28);
  pointer-events: none;
}

.experienceCard > * {
  position: relative;
  z-index: 1;
}

.experienceCard:hover {
  border-color: rgba(236, 72, 153, 0.45);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.16),
    0 0 28px rgba(168, 85, 247, 0.32),
    0 0 54px rgba(20, 184, 166, 0.14),
    0 22px 54px rgba(0, 0, 0, 0.32);
}

@keyframes neonPulse {
  0%, 100% {
    opacity: 0.28;
  }

  50% {
    opacity: 0.58;
  }
}

.experienceLogo {
  display: flex;
  width: 4rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  background: #ffffff;
  padding: 0.5rem;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
}

.mobileLogo {
  width: 3rem;
  height: 3rem;
  padding: 0.35rem;
}
</style>
