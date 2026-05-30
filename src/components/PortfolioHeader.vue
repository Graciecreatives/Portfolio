<template>
  <header class="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-7xl rounded-full bg-[#10051f]/55 backdrop-blur-2xl border border-white/15 shadow-[0_18px_60px_rgba(0,0,0,0.28),0_0_34px_rgba(168,85,247,0.16)] transition-all duration-300">
    <div class="px-6 sm:px-8 flex justify-between items-center h-16 md:h-20">

      <!-- Logo / Name -->
      <router-link to="/" class="text-2xl font-bold text-white cursor-pointer">
        <img src="../assets/brand/Logo.webp" alt="Logo" class="w-40 md:w-48 opacity-95 hover:opacity-100 transition brightness-0 invert" loading="eager">
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <router-link to="/" class="text-violet-100/80 hover:text-white hover:bg-white/10 px-3 py-1 rounded-full transition font-medium">Home</router-link>
        <router-link to="/about" class="text-violet-100/80 hover:text-white hover:bg-white/10 px-3 py-1 rounded-full transition font-medium">About</router-link>
        <router-link to="/projects" class="text-violet-100/80 hover:text-white hover:bg-white/10 px-3 py-1 rounded-full transition font-medium">Projects</router-link>
        <router-link to="/about#experience" class="text-violet-100/80 hover:text-white hover:bg-white/10 px-3 py-1 rounded-full transition font-medium">Experience</router-link>
        <router-link to="/gallery" class="text-violet-100/80 hover:text-white hover:bg-white/10 px-3 py-1 rounded-full transition font-medium">Gallery</router-link>
        <router-link to="/contact" class="text-violet-100/80 hover:text-white hover:bg-white/10 px-3 py-1 rounded-full transition font-medium">Contact</router-link>
      </nav>

      <!-- Actions & Hamburger -->
      <div class="flex items-center gap-4">

        <router-link
          to="/contact"
          class="bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#FB923C] text-white hover:shadow-[0_0_28px_rgba(168,85,247,0.5)] px-5 py-2 rounded-full transition hidden md:inline-flex items-center gap-2 text-sm font-semibold shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M5 11h14M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Book Now</span>
        </router-link>

        <!-- Mobile Hamburger -->
        <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-full hover:bg-white/10 text-violet-100 transition">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden absolute top-20 left-0 w-full px-6 pb-4">
        <div class="bg-[#10051f]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-xl flex flex-col space-y-3">
          <router-link to="/" class="text-violet-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition" @click="isOpen = false">Home</router-link>
          <router-link to="/about" class="text-violet-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition" @click="isOpen = false">About</router-link>
          <router-link to="/projects" class="text-violet-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition" @click="isOpen = false">Projects</router-link>
          <router-link to="/about#experience" class="text-violet-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition" @click="isOpen = false">Experience</router-link>
          <router-link to="/gallery" class="text-violet-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition" @click="isOpen = false">Gallery</router-link>
          <router-link to="/contact" class="text-violet-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition" @click="isOpen = false">Contact</router-link>
          <router-link to="/contact" class="bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#FB923C] text-white text-center px-4 py-2 rounded-lg hover:shadow-[0_0_28px_rgba(168,85,247,0.45)] transition font-semibold mx-2 mt-2" @click="isOpen = false">
            Book Now
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
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
