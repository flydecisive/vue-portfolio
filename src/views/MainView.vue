<script>
import HeroSection from "../components/HeroSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";

export default {
  name: "MainView",
  components: { HeroSection, ExperienceSection },
};
</script>

<template>
  <div class="main-view">
    <hero-section />
    <experience-section />
  </div>
</template>

<style scoped lang="scss">
.main-view {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
}
</style>
