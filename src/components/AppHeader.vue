<script>
import PrimaryButton from "@/UI/buttons/PrimaryButton.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";
import AppContainer from "./AppContainer.vue";
import AppLogo from "@/components/icons/AppLogo.vue";

export default {
  name: "AppHeader",
  components: {
    PrimaryButton,
    DownloadIcon,
    AppContainer,
    AppLogo,
  },
  methods: {
    triggerDownload() {
      const link = document.createElement("a");
      link.href = "/src/assets/files/resume.pdf";
      link.download = "resume.pdf";
      link.click();
      URL.revokeObjectURL(link.href);
    },
  },
};
</script>

<template>
  <app-container
    ><header class="header">
      <router-link to="/" class="header__link">
        <app-logo />
      </router-link>
      <nav class="nav">
        <div class="nav__item">
          <router-link to="/#skills" class="nav__link">Навыки</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/#exp" class="nav__link">Опыт</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/#about" class="nav__link">Обо мне</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/#projects" class="nav__link">Проекты</router-link>
        </div>
      </nav>
      <primary-button @click="triggerDownload"
        ><div class="header__button">
          Резюме
          <download-icon /></div
      ></primary-button></header
  ></app-container>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.header {
  width: 100%;
  padding: 24px 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__link {
    display: inline-block;
    text-decoration: none;
  }

  &__button {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 32px;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: $primary-black;

  &__link {
    text-decoration: none;
    color: $primary-black;
    transition: all 0.3s;

    &:hover {
      text-decoration: underline;
      color: $primary-neutral;
    }
  }
}
</style>
