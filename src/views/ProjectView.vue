<script>
import AppContainer from "@/components/AppContainer.vue";
import DeployLinkIcon from "@/components/icons/DeployLinkIcon.vue";
import SourceCodeLinkIcon from "@/components/icons/SourceCodeLinkIcon.vue";
import AppSlider from "@/components/AppSlider.vue";

import PROJECTS from "@/consts/PROJECTS";

export default {
  name: "ProjectView",
  data() {
    return {
      projects: PROJECTS,
      project: {},
    };
  },
  components: {
    AppContainer,
    DeployLinkIcon,
    SourceCodeLinkIcon,
    AppSlider,
  },
  methods: {
    defineProject() {
      const paramsId = this.$route.params.id;
      const project = this.$data.projects.filter((project) => {
        return project.id === Number(paramsId);
      })[0];
      this.$data.project = project;
    },
  },
  beforeMount() {
    this.defineProject();
  },
};
</script>

<template>
  <section class="project-view">
    <app-container>
      <div class="project-view__wrapper">
        <h2 class="section__title">
          {{ $data.project.name }}
        </h2>
        <p class="project-view__description">
          {{ $data.project.description }}
        </p>
        <app-slider :images="$data.project.images" />
        <ul class="project-view__functions">
          Основные функции:
          <li
            class="project-view__function"
            v-for="item in this.$data.project.main_functions"
          >
            {{ item }}
          </li>
        </ul>
        <div class="project-view__content">
          <div class="project-view__stack">
            <div
              class="project-view__stack_item"
              v-for="stack in this.$data.project.stacks"
            >
              {{ stack }}
            </div>
          </div>
          <div class="project-view__links">
            <a
              :href="this.$data.project.deploy_link"
              target="_blank"
              class="project-view__link"
              v-if="
                this.$data.project.deploy_link &&
                this.$data.project.deploy_link.length > 0
              "
              ><deploy-link-icon /> Deploy</a
            >
            <a
              :href="this.$data.project.source_code_link"
              target="_blank"
              class="project-view__link"
              v-if="
                this.$data.project.source_code_link &&
                this.$data.project.source_code_link.length > 0
              "
              ><source-code-link-icon /> Исходники</a
            >
          </div>
        </div>
      </div>
    </app-container>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";

.project-view {
  color: $primary-black;

  &__wrapper {
    width: 100%;
    padding: 60px 32px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 30px;
  }

  &__description {
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: $zinc-500;
    font-weight: 500;
    text-align: center;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    gap: 40px;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__stack {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    gap: 12px;
    align-self: flex-start;

    &_item {
      padding: 4px 8px;
      box-sizing: border-box;
      border: 1px solid $primary-black;
      border-radius: 4px;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.02em;
      font-weight: 500;
      text-transform: capitalize;
      color: $primary-black;
    }
  }

  &__functions {
    list-style-position: inside;
    color: $zinc-500;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }

  &__function {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    padding: 4px 0px;
  }

  &__links {
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    align-items: center;
  }

  &__link {
    text-decoration: none;
    color: $zinc-500;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    transition: all 0.3s;
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
    align-items: center;

    &:hover {
      text-decoration: underline;
      color: $primary-black;
    }
  }
}
</style>
