<script setup>
import { RouterView } from 'vue-router'
import PortfolioHeader from '@/components/PortfolioHeader.vue'
import Footer from '@/components/theFooter.vue'
</script>

<template>
  <div class="min-h-screen">
    <PortfolioHeader />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
</style>
