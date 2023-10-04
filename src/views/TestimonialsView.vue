<template>
  <GenericBanner name="Testimonials"></GenericBanner>
  <testimonialsComponent></testimonialsComponent>
  <bannerContactComponent></bannerContactComponent>
</template>

<script>
import GenericBanner from '@/components/GenericBanner.vue';
import testimonialsComponent from '@/components/testimonialsComponent.vue';
import bannerContactComponent from '@/components/bannerContactComponent.vue';
export default {
  components: {
    GenericBanner,
    bannerContactComponent,
    testimonialsComponent,

  },
}
</script>

<style>

</style>