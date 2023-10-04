<template>
    <generic-banner name="About"></generic-banner>
    <aboutUsComponent></aboutUsComponent>
    <iconsComponent></iconsComponent>
    <bannerContactComponentVue></bannerContactComponentVue>
</template>

<script>
 import aboutUsComponent from '@/components/aboutUsComponent.vue';
import iconsComponent from '@/components/iconsComponent.vue';
import GenericBanner from '@/components/GenericBanner.vue';
import bannerContactComponentVue from '@/components/bannerContactComponent.vue';
export default {
    components: {
        aboutUsComponent,
        GenericBanner,
        iconsComponent,
        
        bannerContactComponentVue
    }
};
</script>

<style lang="scss" scoped>
    section{
        margin-top: 0;
        margin-bottom: 5rem;
    }


@media screen and (max-width: 900px){
    section{
        margin-top: 0 !important;

    }
}


</style>
