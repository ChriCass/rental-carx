<template>
  <generic-banner-vue
    name="
Our Team"
  ></generic-banner-vue>
  <ourTeamComponent></ourTeamComponent>
  <bannerContactComponent></bannerContactComponent>
</template>

<script>
import GenericBannerVue from "@/components/GenericBanner.vue";
import ourTeamComponent from '@/components/ourTeamComponent.vue';
import bannerContactComponent from '@/components/bannerContactComponent.vue';
export default {
  components: {
    GenericBannerVue,
    ourTeamComponent,
    bannerContactComponent
  },
};
</script>

<style></style>
