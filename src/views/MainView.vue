<script>
import HeroSection from "../components/HeroSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import TOP_PROJECTS from "@/consts/TOP_PROJECTS";

export default {
  name: "MainView",
  data() {
    return {
      projects: TOP_PROJECTS,
    };
  },
  components: {
    HeroSection,
    ExperienceSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
  },
};
</script>

<template>
  <div class="main-view">
    <hero-section />
    <skills-section />
    <experience-section />
    <about-section />
    <projects-section :projects="projects" :isMoreButtonVisible="true" />
  </div>
</template>

<style scoped lang="scss">
.main-view {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
}
</style>
