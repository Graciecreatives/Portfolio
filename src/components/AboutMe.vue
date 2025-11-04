<template>
  <section class="flex flex-col md:flex-row gap-10 md:px-10 px-4 py-10">
    <!-- Left Content -->
    <div class="md:w-1/2 w-full px-2 md:px-5">
      <h2 class="text-4xl mb-5 font-[900] mb-10 text-[#9318FA]">ABOUT ME</h2>

      <!-- Tabs -->
      <div class="flex gap-6 mb-6 overflow-x-auto">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="pb-2 text-lg font-medium whitespace-nowrap transition-colors"
          :class="activeTab === tab
            ? 'text-purple-700 border-b-2 border-purple-700'
            : 'text-gray-500 hover:text-purple-700'"
        >{{ tab }}</button>
      </div>

      <!-- Tab Content -->
      <div v-if="activeTab === 'MYSELF'">
        <p
          class="leading-8 mb-5 text-justify"
        >Hi, I’m Grace, a passionate frontend developer and creative website designer dedicated to transforming ideas into visually stunning and user friendly digital experiences. I specialize in building responsive, high performance websites using modern technologies like Vue.js, Tailwind CSS, and other cutting-edge tools. Beyond frontend design, I’m expanding my expertise into full-stack and blockchain development to create more scalable and future-ready solutions. I’m driven by innovation, attention to detail, and the desire to help brands and entrepreneurs establish a strong online presence that truly reflects their vision.</p>
        <router-link
          to="#"
          class="bg-[#9318FA] text-white px-5 py-2 rounded-md inline-block hover:bg-purple-800 transition-colors duration-300"
        >Get in Touch</router-link>
      </div>

      <div v-if="activeTab === 'EDUCATION'">
        <p
          class="leading-8 mb-5 text-justify"
        >I’m currently in my 3rd year of Computer Science at Tai Solarin University of Education (TASUED), where I’m building a strong foundation in programming and problem-solving. I specialize in frontend web development using Vuejs, Reactsjs, HTML, CSS, and JavaScript, with a focus on crafting intuitive, user-friendly interfaces using Figma. I’ve also completed multiple online certifications in web design and development. Additionally, I’m exploring Web3 technologies, including blockchain and decentralized applications (dApps), to expand my technical expertise. My goal is to leverage my skills and creativity to build innovative digital solutions that make a real-world impact.</p>
      </div>

      <div v-if="activeTab === 'SKILLS'">
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 overflow-x-auto"
        >
          <SkillCircle name="Vue.js" :percentage="90" color="#41B883" />
          <SkillCircle name="React.js" :percentage="75" color="#61DBFB" />
          <SkillCircle name="Tailwind" :percentage="92" color="#38B2AC" />
          <SkillCircle name="HTML" :percentage="90" color="#E34F26" />
          <SkillCircle name="CSS" :percentage="80" color="#1572B6" />
          <SkillCircle name="JavaScript" :percentage="75" color="#F7DF1E" />
          <SkillCircle name="Node.js" :percentage="70" color="#FFCD00" />
          <SkillCircle name="Express.js" :percentage="65" color="#FFCD00" />
          <SkillCircle name="MongoDB" :percentage="85" color="#47A248" />
          <SkillCircle name="Solidity" :percentage="75" color="#0db7ed" />
          <SkillCircle name="Git" :percentage="75" color="#F05032" />
          <SkillCircle name="Github" :percentage="80" color="#181717" />
          <SkillCircle name="Wordpress" :percentage="80" color="#21759B" />
          <SkillCircle name="Wix" :percentage="80" color="#1F1F1F" />
        </div>
      </div>
    </div>

    <!-- Right Image -->
    <div class="md:w-1/2 w-full px-2 md:px-5 flex justify-center items-center">
      <img src="../assets/Images/mypictureeee.png" class="w-full h-auto rounded-lg object-cover" alt="Grace" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SkillCircle from "./skillCircle.vue";

const tabs = ["MYSELF", "EDUCATION", "SKILLS"];
const activeTab = ref("MYSELF");
</script>
