<template>
  <GenericBanner
    name="
Vehicle Models"
  ></GenericBanner>
  <modelsCarComponent></modelsCarComponent>
  <bannerContactComponent></bannerContactComponent>
</template>

<script>
import modelsCarComponent from "@/components/modelsCarComponent.vue";
import GenericBanner from "@/components/GenericBanner.vue";
import bannerContactComponent from "@/components/bannerContactComponent.vue";
export default {
  components: {
    GenericBanner,
    modelsCarComponent,
    bannerContactComponent,
  },
};
</script>

<style></style>
