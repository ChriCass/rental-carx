<template>
  <banner-component></banner-component>
  <booka-car-component-vue></booka-car-component-vue>
  <icons-component></icons-component>
  <pick-component></pick-component>
  <save-component></save-component>
  <truck-component></truck-component>
  <testimonials-component-vue></testimonials-component-vue>
  <faq-component></faq-component>
  <mobile-component-vue></mobile-component-vue>
</template>

<script>

import BannerComponent from "@/components/bannerComponent.vue"; // Cambiado a BannerComponent
import bookaCarComponentVue from "@/components/bookaCarComponent.vue";
import iconsComponent from "@/components/iconsComponent.vue";
import saveComponent from "@/components/saveComponent.vue";
import testimonialsComponentVue from '@/components/testimonialsComponent.vue';
import truckComponent from "@/components/truckComponent.vue";
import mobileComponentVue from '@/components/mobileComponent.vue';
import faqComponent from "@/components/faqComponent.vue";
import pickComponent from "@/components/pickComponent.vue";
export default {
  components: {
    BannerComponent, // Cambiado a BannerComponent
    bookaCarComponentVue,
    iconsComponent,
    pickComponent,
    saveComponent,
    truckComponent,
    testimonialsComponentVue,
    mobileComponentVue,
    faqComponent,
  },
};
</script>
