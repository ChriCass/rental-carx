<template>
  <navbar-component></navbar-component>
  <router-view></router-view>
  <footer-component-vue></footer-component-vue>
</template>


<script>
import HomeView from './views/HomeView.vue'
import footerComponentVue from '@/components/footerComponent.vue';
import NavbarComponent from "@/components/navbarComponent.vue"; // Cambiado a NavbarComponent
export default{
  components: { HomeView, NavbarComponent, footerComponentVue },


}


</script>


<style lang="scss">
 
</style>
