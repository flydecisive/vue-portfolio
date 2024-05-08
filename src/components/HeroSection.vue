<script>
import SocialsNetwork from "@/UI/SocialsNetwork.vue";
import AppContainer from "./AppContainer.vue";

export default {
  name: "HeroSection",
  components: {
    SocialsNetwork,
    AppContainer,
  },
};
</script>

<template>
  <app-container>
    <section class="hero">
      <div class="hero__wrapper">
        <img class="hero__img" src="@/assets/img/HeroBanner.svg" alt="banner" />
        <div class="hero__content">
          <h1 class="hero__title">
            Привет, я
            <span class="hero__title-bold">Мухин Максим. </span>
            <span class="hero__title-bold">Frontend</span>
            <span class="hero__title-stroke"> Developer</span>
            из <span class="hero__title-bold">России.</span>
          </h1>
          <p class="hero__text">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
        <div class="hero__socials"><socials-network /></div>
      </div>
    </section>
  </app-container>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.hero {
  padding: 60px 32px;
  width: 100%;
  box-sizing: border-box;

  &__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    height: 596px;
  }

  &__title {
    font-weight: 400;
    font-size: 48px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: $primary-black;

    &-bold {
      font-weight: 800;
    }

    &-stroke {
      color: transparent;
      color: $primary-white;
      text-shadow: 1px 0 $primary-black, -1px 0 $primary-black,
        0 1px $primary-black, 0 -1px $primary-black;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: $zinc-500;
  }

  &__img {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__content {
    width: 600px;
    display: flex;
    flex-flow: column nowrap;
    gap: 32px;
  }

  &__socials {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(50%);
    padding: 4px 0px;
    box-sizing: border-box;
  }
}
</style>
