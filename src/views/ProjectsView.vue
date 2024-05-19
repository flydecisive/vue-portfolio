<script>
import ProjectsSection from "@/components/ProjectsSection.vue";
import PROJECTS from "@/consts/PROJECTS";

export default {
  name: "ProjectsView",
  data() {
    return {
      projects: PROJECTS,
    };
  },
  components: {
    ProjectsSection,
  },
};
</script>

<template>
  <div class="projects-view">
    <projects-section
      :colorName="'white'"
      :projects="projects"
      :isMoreButtonVisible="false"
    />
  </div>
</template>

<style scoped lang="scss"></style>
