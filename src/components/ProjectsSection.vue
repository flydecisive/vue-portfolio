<script>
import AppContainer from "@/components/AppContainer.vue";
import ProjectsItem from "@/UI/ProjectsItem.vue";
import TransparentButton from "@/UI/buttons/TransparentButton.vue";

export default {
  name: "ProjectsSection",
  props: {
    projects: Object,
    colorName: { type: String, default: "black" },
    isMoreButtonVisible: Boolean,
  },
  components: {
    AppContainer,
    ProjectsItem,
    TransparentButton,
  },
  methods: {
    goToProjects() {
      this.$router.push("/projects");
    },
  },
  computed: {
    style() {
      return {
        background: this.colorName === "white" ? "#fff" : "#000",
      };
    },
    titleStyle() {
      return {
        color: this.colorName === "white" ? "#000" : "#fff",
      };
    },
  },
};
</script>

<template>
  <section class="projects" id="projects" :style="style">
    <app-container
      ><div class="projects__wrapper">
        <h2 class="section__title" :style="titleStyle">
          Мои <span class="section__title-bold">Проекты</span>
        </h2>
        <projects-item
          v-for="project in projects"
          :item="project"
          :order="project.id % 2 === 0 ? 0 : 1"
          :colorName="colorName"
        />
        <transparent-button @click="goToProjects" v-if="isMoreButtonVisible"
          >Смотреть все</transparent-button
        >
      </div></app-container
    >
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";

.projects {
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
}
</style>
