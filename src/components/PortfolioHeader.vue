<template>
  <header class="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-7xl rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-lg transition-all duration-300">
    <div class="px-6 sm:px-8 flex justify-between items-center h-16 md:h-20">

      <!-- Logo / Name -->
      <div class="text-2xl font-bold text-gray-900 cursor-pointer" @click="scrollToSection('home')">
        <!-- Assuming Logo.png is dark or works on light. Removed invert. -->
        <img src="../assets/Logo.png" alt="Logo" class="w-40 md:w-48 opacity-90 hover:opacity-100 transition" loading="eager">
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a href="#home" class="text-gray-700 hover:text-[#9318FA] hover:bg-white/50 px-3 py-1 rounded-full transition font-medium">Home</a>
        <a href="#about" class="text-gray-700 hover:text-[#9318FA] hover:bg-white/50 px-3 py-1 rounded-full transition font-medium">About</a>
        <a href="#projects" class="text-gray-700 hover:text-[#9318FA] hover:bg-white/50 px-3 py-1 rounded-full transition font-medium">Projects</a>
        <a href="#experience" class="text-gray-700 hover:text-[#9318FA] hover:bg-white/50 px-3 py-1 rounded-full transition font-medium">Experience</a>
        <!-- <a href="#education" class="text-gray-700 hover:text-[#9318FA] hover:bg-white/50 px-3 py-1 rounded-full transition font-medium">Education</a> -->
        <a href="#contact" class="text-gray-700 hover:text-[#9318FA] hover:bg-white/50 px-3 py-1 rounded-full transition font-medium">Contact</a>
      </nav>

      <!-- Actions & Hamburger -->
      <div class="flex items-center gap-4">

        <!-- Download Resume Button -->
        <a
          href="/MyResume.pdf"
          download="MyResume.pdf"
          class="bg-[#9318FA] text-white hover:bg-[#7a12d4] px-5 py-2 rounded-full transition hidden md:inline-flex items-center gap-2 text-sm font-semibold shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Resume</span>
        </a>


        <!-- Dark Mode Toggle (Optional) -->
        <button class="p-2 rounded-full hover:bg-gray-100 transition md:inline-flex text-gray-700" @click="toggleMode">
          <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>

        <!-- Mobile Hamburger -->
        <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-700 transition">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden absolute top-20 left-0 w-full px-6 pb-4">
        <div class="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl p-4 shadow-xl flex flex-col space-y-3">
          <a href="#home" class="text-gray-700 hover:text-[#9318FA] hover:bg-gray-50 px-4 py-2 rounded-lg transition" @click="isOpen = false">Home</a>
          <a href="#about" class="text-gray-700 hover:text-[#9318FA] hover:bg-gray-50 px-4 py-2 rounded-lg transition" @click="isOpen = false">About</a>
          <a href="#projects" class="text-gray-700 hover:text-[#9318FA] hover:bg-gray-50 px-4 py-2 rounded-lg transition" @click="isOpen = false">Projects</a>
          <a href="#experience" class="text-gray-700 hover:text-[#9318FA] hover:bg-gray-50 px-4 py-2 rounded-lg transition" @click="isOpen = false">Experience</a>
          <!-- <a href="#education" class="text-gray-700 hover:text-[#9318FA] hover:bg-gray-50 px-4 py-2 rounded-lg transition" @click="isOpen = false">Education</a> -->
          <a href="#contact" class="text-gray-700 hover:text-[#9318FA] hover:bg-gray-50 px-4 py-2 rounded-lg transition" @click="isOpen = false">Contact</a>
          <a href="/MyResume.pdf" download class="bg-[#9318FA] text-white text-center px-4 py-2 rounded-lg hover:bg-[#8014d8] transition font-semibold mx-2 mt-2">
            Download Resume
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isDarkMode = ref(false);

function toggleMode() {
  isDarkMode.value = !isDarkMode.value
  // Implement actual dark mode logic here if global state needed
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if(element) element.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
/* Mobile Menu Animation */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
