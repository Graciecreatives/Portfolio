<script setup>
import AboutHero from '@/components/AboutHero.vue'
import AboutMe from '@/components/AboutMe.vue'
import MyExperience from '@/components/myExperience.vue'
</script>

<template>
  <main class="aboutPage">
    <AboutHero />
    <AboutMe />
    <MyExperience />
  </main>
</template>

<style scoped>
.aboutPage {
  min-height: 100vh;
  background:
    radial-gradient(circle at 12% 34%, rgba(168, 85, 247, 0.12), transparent 28rem),
    radial-gradient(circle at 86% 58%, rgba(34, 211, 238, 0.08), transparent 26rem),
    linear-gradient(180deg, #05020b 0%, #0a0312 38%, #05020b 100%);
}
</style>
