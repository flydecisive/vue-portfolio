<script>
import AppContainer from "./AppContainer.vue";

export default {
  name: "AppFooter",
  components: {
    AppContainer,
  },
};
</script>

<template>
  <footer class="footer">
    <app-container>
      <div class="footer__wrapper">
        <img src="@/assets/img/LogoFooter.svg" alt="logo" />
        <p class="footer__text">@Мухин Максим</p>
      </div></app-container
    >
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.footer {
  background: $primary-black;
  width: 100%;
  padding: 24px 0px;
  box-sizing: border-box;

  &__wrapper {
    margin: 0 auto;
    padding: 6px 32px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__text {
    color: $primary-white;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: -0.02em;
    font-weight: 600;
  }
}
</style>
