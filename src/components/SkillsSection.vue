<script>
import AppContainer from "@/components/AppContainer.vue";
import GitIcon from "./icons/skills/GitIcon.vue";
import CssIcon from "./icons/skills/CssIcon.vue";
import JsIcon from "./icons/skills/JsIcon.vue";
import ReactIcon from "./icons/skills/ReactIcon.vue";
import HtmlIcon from "./icons/skills/HtmlIcon.vue";
import TsIcon from "./icons/skills/TsIcon.vue";
import ReduxIcon from "./icons/skills/ReduxIcon.vue";
import SassIcon from "./icons/skills/SassIcon.vue";
import WebpackIcon from "./icons/skills/WebpackIcon.vue";
import VueIcon from "./icons/skills/VueIcon.vue";
import DockerIcon from "./icons/skills/DockerIcon.vue";
import NodeIcon from "./icons/skills/NodeIcon.vue";

export default {
  name: "SkillsSection",
  components: {
    AppContainer,
    GitIcon,
    CssIcon,
    JsIcon,
    ReactIcon,
    HtmlIcon,
    TsIcon,
    ReduxIcon,
    SassIcon,
    WebpackIcon,
    VueIcon,
    DockerIcon,
    NodeIcon,
  },
};
</script>

<template>
  <section class="skills">
    <app-container>
      <div class="skills__wrapper">
        <h2 class="skills__title section__title">
          Мои <span class="section__title-bold">Навыки</span>
        </h2>
        <div class="skills__list">
          <div class="skills__item"><git-icon /> Git</div>
          <div class="skills__item"><css-icon /> CSS3</div>
          <div class="skills__item"><js-icon /> JavaScript</div>
          <div class="skills__item"><react-icon /> React</div>
          <div class="skills__item"><html-icon /> HTML5</div>
          <div class="skills__item"><ts-icon /> TypeScript</div>
          <div class="skills__item"><redux-icon /> Redux</div>
          <div class="skills__item"><sass-icon /> Sass/Scss</div>
          <div class="skills__item"><webpack-icon /> Webpack</div>
          <div class="skills__item"><vue-icon /> Vue</div>
          <div class="skills__item"><docker-icon /> Docker</div>
          <div class="skills__item"><node-icon /> NodeJS</div>
        </div>
      </div>
    </app-container>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.skills {
  padding: 60px 0px;
  box-sizing: border-box;

  &__title {
    color: $primary-black;
  }

  &__wrapper {
    width: 100%;
    padding: 0px 32px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 20px;
  }

  &__list {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 20px;
  }

  &__item {
    width: 186px;
    height: 186px;
    border: 2px solid $primary-black;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    gap: 32px;
    color: $primary-black;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    transition: all 0.3s;

    &:hover {
      background: $primary-black;
      color: $primary-white;
    }
  }
}
</style>
