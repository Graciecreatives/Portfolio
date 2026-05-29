<template>
  <section class="py-20 px-4 md:px-12 bg-white relative">
    
    <!-- Header -->
    <div class="text-center mb-16" data-aos="fade-down">
      <h2 class="text-4xl md:text-5xl font-black text-[#9318FA] mb-6 tracking-tight">LIFE AS A DEVELOPER</h2>
      <p class="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed font-light">
         Bridges built, events hosted, and moments captured. A glimpse into my journey within the tech community.
      </p>
      <div class="h-1.5 w-24 bg-[#9318FA] rounded-full mx-auto mt-6"></div>
    </div>

    <!-- Masonry-style Grid -->
    <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
      
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="relative group rounded-2xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
        data-aos="zoom-in"
      >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        
        <!-- Image -->
        <img
          :src="image"
          class="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          :alt="`Gallery Image ${index + 1}`"
          loading="lazy" 
        />
        
        <!-- Hover Badge (Optional) -->
        <div class="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span class="bg-white/90 backdrop-blur-md text-[#9318FA] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Moment {{ index + 1 }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Image1 from '@/assets/Images/gallery/DSC00168.webp'
import Image2 from '@/assets/Images/gallery/DSC00169.webp'
import Image3 from '@/assets/Images/gallery/DSC09180.webp'
import Image4 from '@/assets/Images/gallery/DSC09320.JPG.webp'
import Image5 from '@/assets/Images/gallery/DSC09534.webp'
import Certificate1 from '@/assets/Images/gallery/certificate.webp'
import safeOnline1 from '@/assets/Images/gallery/122A2989.webp'
import safeOnline3 from '@/assets/Images/gallery/122A3021.webp'
import safeOnline4 from '@/assets/Images/gallery/122A3095.webp'
import safeOnline5 from '@/assets/Images/gallery/122A3103.webp'
import safeOnline6 from '@/assets/Images/gallery/122A3174.webp'
import safeOnline7 from '@/assets/Images/gallery/WhatsApp Image 2025-11-04 at 15.21.52_c639e5fe.webp'
import Hackathon1 from '@/assets/Images/gallery/challenge2.webp'
import Hackathon2 from '@/assets/Images/gallery/challenge3.webp'
import Hackathon3 from '@/assets/Images/gallery/challenge4.webp'
import Osd from '@/assets/Images/gallery/osd1.webp'


const images = ref([
  Image1,
  Hackathon1,
  Osd,
  Hackathon2,
  Hackathon3,
  Image2,
  Image3,
  Image4,
  Certificate1,
  Image5,
  safeOnline1,
  safeOnline3,
  safeOnline4,
  safeOnline5,
  safeOnline6,
  safeOnline7,
]);
</script>

<style scoped>
/* No extra styles needed, Tailwind columns handles the masonry layout */
</style>
