<template>
  <header class="bg-[#F9FAFB] border-b border-gray-200 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">

      <!-- Logo / Name -->
      <div class="text-2xl font-bold text-purple-700">
        <img src="../assets/Logo.png" alt="Logo" class="w-50">
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <router-link to="#" class="text-gray-900 hover:text-purple-700 transition">Home</router-link>
        <router-link to="/about" class="text-gray-900 hover:text-purple-700 transition">About</router-link>
        <router-link to="/project" class="text-gray-900 hover:text-purple-700 transition">Projects</router-link>
        <router-link to="/experience" class="text-gray-900 hover:text-purple-700 transition">Experience</router-link>
        <router-link to="#" class="text-gray-900 hover:text-purple-700 transition">Education</router-link>
        <router-link to="#" class="text-gray-900 hover:text-purple-700 transition">Contact</router-link>
      </nav>

      <!-- Actions & Hamburger -->
      <div class="flex items-center gap-4 md:gap-5">

        <!-- Download Resume Button -->
        <a
  href="/MyResume.pdf"
  download="MyResume.pdf"
  class="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition hidden md:inline-flex items-center gap-2"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
  <span>Download Resume</span>
</a>


        <!-- Dark Mode Toggle -->
        <button class="p-2 rounded hover:bg-gray-200 md:inline-flex" @click="toggleMode">
          <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#9318fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.7 7.7 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.3 7.3 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862C3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675Z"/>
            <path d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.33 2.33 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.33 2.33 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.33 2.33 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.33 2.33 0 0 1-2.588 0z"/>
          </svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#000000">
            <path d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.7 7.7 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.3 7.3 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862C3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675"/>
            <path d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.33 2.33 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.33 2.33 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.33 2.33 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.33 2.33 0 0 1-2.588 0z"/>
          </svg>
        </button>

        <!-- Mobile Hamburger -->
        <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-purple-700">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden bg-gray-50 border-t border-gray-200">
        <nav class="flex flex-col space-y-2 p-4">
          <router-link to="#" class="text-gray-900 hover:text-purple-700 transition">Home</router-link>
          <router-link to="#" class="text-gray-900 hover:text-purple-700 transition">About</router-link>
          <router-link to="#" class="text-gray-900 hover:text-purple-700 transition">Projects</router-link>
          <router-link to="#" class="text-gray-900 hover:text-purple-700 transition">Experience</router-link>
          <router-link to="#" class="text-gray-900 hover:text-purple-700 transition">Education</router-link>
          <router-link to="#" class="text-gray-900 hover:text-purple-700 transition">Contact</router-link>
          <a href="" class="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition mt-2">
            Download Resume
          </a>
        </nav>
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
}
</script>

<style>
/* optional smooth slide animation for mobile menu */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
