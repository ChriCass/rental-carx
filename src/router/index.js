import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
 import ContactView from '../views/ContactView.vue';
 import OurTeamView from '../views/OurTeamView.vue';
 import testimonialsComponentVue from '@/views/TestimonialsView.vue';
 import modelsView from '../views/modelsView.vue';
 import AboutView from '../views/AboutView.vue';

 const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView 
  },
  {
    path: '/team',
    name: 'team',
    component: OurTeamView 
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: testimonialsComponentVue 
  },
  {
    path: '/models',
    name: 'models',
    component: modelsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router