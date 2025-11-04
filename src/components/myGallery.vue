<template>
  <section class="py-16 px-6 bg-gray-50">
    <h2 class="text-4xl font-bold text-center mb-8 text-[#9318FA]">Life as a Developer</h2>

    <div class="overflow-hidden max-w-6xl mx-auto relative">
      <div class="marquee flex gap-4">
        <!-- Duplicate images for smooth infinite scroll -->
        <div
          v-for="(image, index) in duplicatedImages"
          :key="index"
          class="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
        >
          <img
            :src="image"
            class="rounded-xl object-cover w-full h-48 sm:h-56 md:h-64 shadow-md"
            :alt="`Gallery Image ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import safeOnline1 from '@/assets/Images/122A2989.jpg'
import safeOnline2 from '@/assets/Images/122A2994.jpg'
import safeOnline3 from '@/assets/Images/122A3021.jpg'
import safeOnline4 from '@/assets/Images/122A3095.jpg'
import safeOnline5 from '@/assets/Images/122A3103.jpg'
import safeOnline6 from '@/assets/Images/122A3174.jpg'
import safeOnline7 from '@/assets/Images/WhatsApp Image 2025-11-04 at 15.21.52_c639e5fe.jpg'

// Array of images
const images = ref([
  safeOnline1,
  safeOnline2,
  safeOnline3,
  safeOnline4,
  safeOnline5,
  safeOnline6,
  safeOnline7,
]);

// Duplicate images to make the scroll seamless
const duplicatedImages = computed(() => [...images.value, ...images.value]);
</script>

<style scoped>
.marquee {
  display: flex;
  gap: 1rem;
  animation: marquee 20s linear infinite;
}

.marquee img {
  transition: transform 0.5s ease;
}

.marquee img:hover {
  transform: scale(1.05);
}

/* Keyframes for infinite horizontal scroll */
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
