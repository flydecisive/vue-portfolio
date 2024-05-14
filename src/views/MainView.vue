<script>
import HeroSection from "../components/HeroSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";

export default {
  name: "MainView",
  components: { HeroSection, ExperienceSection, AboutSection, ProjectsSection },
};
</script>

<template>
  <div class="main-view">
    <hero-section />
    <experience-section />
    <about-section />
    <projects-section />
  </div>
</template>

<style scoped lang="scss">
.main-view {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
}
</style>
