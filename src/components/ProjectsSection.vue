<script>
import AppContainer from "@/components/AppContainer.vue";
import ProjectsItem from "@/UI/ProjectsItem.vue";
import TransparentButton from "@/UI/buttons/TransparentButton.vue";

import TOP_PROJECTS from "@/consts/TOP_PROJECTS.js";

export default {
  name: "ProjectsSection",
  data() {
    return {
      projects: TOP_PROJECTS,
    };
  },
  components: {
    AppContainer,
    ProjectsItem,
    TransparentButton,
  },
};
</script>

<template>
  <section class="projects">
    <app-container
      ><div class="projects__wrapper">
        <h2 class="projects__title section__title">
          Мои <span class="section__title-bold">Проекты</span>
        </h2>
        <projects-item
          v-for="project in projects"
          :item="project"
          :order="project.id % 2 === 0 ? 0 : 1"
        />
        <transparent-button>Смотреть все</transparent-button>
      </div></app-container
    >
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";

.projects {
  background: $primary-black;
  padding: 60px 0px;
  box-sizing: border-box;
  width: 100%;

  &__wrapper {
    padding: 0px 32px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  &__title {
    color: $primary-white;
  }
}
</style>
