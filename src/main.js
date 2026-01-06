import './assets/main.css'
import 'aos/dist/aos.css' // Import AOS styles

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos' // Import AOS

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Initialize AOS
AOS.init({
  duration: 800, // Animation duration
  easing: 'slide', // Easing function
  once: true, // Whether animation should happen only once - while scrolling down
  mirror: false, // Whether elements should animate out while scrolling past them
});


app.mount('#app')
