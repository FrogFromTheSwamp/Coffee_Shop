<template>
  <div class="wrapper">
    <router-view></router-view>
    <footer-component />
  </div>
</template>

<script>
import HeroView from '@/views/HeroView.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: { HeroView, FooterComponent }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
