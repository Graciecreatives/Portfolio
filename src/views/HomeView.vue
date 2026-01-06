<script setup>
import PortfolioHeader from '@/components/PortfolioHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutMe from '@/components/AboutMe.vue';
import myProject from '@/components/myProject.vue';
import myGallery from '@/components/myGallery.vue';
import MyExperience from '@/components/myExperience.vue';
import contactPage from '@/components/contactPage.vue';
import Footer from '@/components/theFooter.vue';

</script>

<template>
  <main>
    <PortfolioHeader />
    <HeroSection id="home" />
    <AboutMe id="about" />
    <myProject id="projects" />
    <MyExperience id="experience" />
    <myGallery id="gallery" />
    <contactPage id="contact" />
    <Footer />
  </main>
</template>
