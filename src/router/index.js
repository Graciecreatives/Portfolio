import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '@/components/AboutMe.vue'
import myProject from '@/components/myProject.vue'
import myExperience from '@/components/myExperience.vue'
import contactPage from '@/components/contactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component:AboutMe,
    // },
    // {
    //   path: '/project',
    //   name: 'my project',
    //   component: myProject,
    // },
    // {
    //   path: '/experience',
    //   name: 'my experience',
    //   component: myExperience,
    // },
    // {
    //   path: '/contact',
    //   name: 'contact me',
    //   component: contactPage,
    }
  ],
})

export default router
