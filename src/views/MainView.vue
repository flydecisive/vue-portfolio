<script>
import HeroSection from "../components/HeroSection.vue";

export default {
  name: "MainView",
  components: { HeroSection },
};
</script>

<template>
  <div class="main-view">
    <hero-section />
  </div>
</template>

<style scoped lang="scss">
.main-view {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
}
</style>
