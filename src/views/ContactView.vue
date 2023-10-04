<template>
  <GenericBannerVue name="Contact us"></GenericBannerVue>
  <formComponentVue></formComponentVue>
  <bannerContactComponentVue></bannerContactComponentVue>
</template>

<script>
import formComponentVue from '@/components/formComponent.vue';
import bannerContactComponentVue from '@/components/bannerContactComponent.vue';
import GenericBannerVue from '@/components/GenericBanner.vue'
export default {
  components: {
    formComponentVue,
    GenericBannerVue,
    bannerContactComponentVue
}
}
</script>

<style>

</style>