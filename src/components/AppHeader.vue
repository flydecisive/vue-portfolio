<script>
import PrimaryButton from "@/UI/buttons/PrimaryButton.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";

export default {
  name: "AppHeader",
  components: {
    PrimaryButton,
    DownloadIcon,
  },
};
</script>

<template>
  <header class="header">
    <a href="#" class="header__link">
      <img src="@/assets/img/Logo.svg" alt="logo" class="header__logo"
    /></a>
    <nav class="nav">
      <div class="nav__item"><a href="#" class="nav__link">Обо мне</a></div>
      <div class="nav__item"><a href="#" class="nav__link">Навыки</a></div>
      <div class="nav__item"><a href="#" class="nav__link">Проекты</a></div>
      <div class="nav__item"><a href="#" class="nav__link">Связаться</a></div>
    </nav>
    <primary-button
      ><div class="header__button">
        Резюме
        <download-icon /></div
    ></primary-button>
  </header>
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
