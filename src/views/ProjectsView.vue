<script>
import ProjectsSection from "@/components/ProjectsSection.vue";
import PROJECTS from "@/consts/PROJECTS";
import PageUp from "@/components/PageUp.vue";

export default {
  name: "ProjectsView",
  data() {
    return {
      projects: PROJECTS,
    };
  },
  components: {
    ProjectsSection,
    PageUp,
  },
};
</script>

<template>
  <div class="projects-view" @scroll="testScroll">
    <projects-section
      :colorName="'white'"
      :projects="projects"
      :isMoreButtonVisible="false"
    />
    <page-up />
  </div>
</template>
