<template>
  <section class="gallerySection">
    
    <!-- Header -->
    <div class="galleryHeading" data-aos="fade-down">
      <span>Gallery</span>
      <h2>LIFE AS A DEVELOPER</h2>
      <p>
         Bridges built, events hosted, and moments captured. A glimpse into my journey within the tech community.
      </p>
    </div>

    <!-- Masonry-style Grid -->
    <div class="galleryGrid">
      
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="galleryItem group"
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
.gallerySection {
  position: relative;
  overflow: hidden;
  padding: 9rem 1.25rem 5rem;
  background:
    radial-gradient(circle at 16% 18%, rgba(236, 72, 153, 0.16), transparent 25rem),
    radial-gradient(circle at 82% 25%, rgba(34, 211, 238, 0.12), transparent 24rem),
    linear-gradient(135deg, #09030f 0%, #210533 52%, #05020b 100%);
}

.gallerySection::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34, 211, 238, 0.16) 1px, transparent 1px);
  background-size: 64px 64px;
  background-position: center top;
  opacity: 0.48;
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.24));
  pointer-events: none;
}

.galleryHeading,
.galleryGrid {
  position: relative;
  z-index: 1;
}

.galleryHeading {
  max-width: 48rem;
  margin: 0 auto 4rem;
  text-align: center;
}

.galleryHeading span {
  display: inline-block;
  margin-bottom: 1rem;
  color: #67e8f9;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.galleryHeading h2 {
  color: #ffffff;
  font-size: clamp(2.55rem, 5vw, 5rem);
  font-weight: 950;
  line-height: 1;
}

.galleryHeading p {
  margin-top: 1.25rem;
  color: rgba(237, 233, 254, 0.76);
  font-size: 1.05rem;
  line-height: 1.8;
}

.galleryGrid {
  columns: 1;
  column-gap: 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
}

.galleryItem {
  position: relative;
  overflow: hidden;
  break-inside: avoid;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.galleryItem:hover {
  transform: translateY(-4px);
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.24), 0 22px 52px rgba(0, 0, 0, 0.32);
}

@media (min-width: 768px) {
  .galleryGrid {
    columns: 2;
  }
}

@media (min-width: 1024px) {
  .galleryGrid {
    columns: 3;
  }
}

@media (max-width: 640px) {
  .gallerySection {
    padding: 8rem 1rem 4rem;
  }
}
</style>
