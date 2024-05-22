<script>
import PrimaryButton from "@/UI/buttons/PrimaryButton.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";
import AppContainer from "./AppContainer.vue";
import AppLogo from "@/components/icons/AppLogo.vue";
import BurgerMenuIcon from "@/components/icons/BurgerMenuIcon.vue";

export default {
  name: "AppHeader",
  data() {
    return {
      isBigScreen: true,
      isMenuOpen: false,
    };
  },
  components: {
    PrimaryButton,
    DownloadIcon,
    AppContainer,
    AppLogo,
    BurgerMenuIcon,
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    triggerDownload() {
      const link = document.createElement("a");
      link.href = "/src/assets/files/resume.pdf";
      link.download = "resume.pdf";
      link.click();
      URL.revokeObjectURL(link.href);
    },

    onResize() {
      this.isBigScreen = window.innerWidth >= 640;
    },

    toggleIsMenuOpen() {
      this.isMenuOpen = !this.isMenuOpen;
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
      <nav class="nav" v-if="isBigScreen">
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
      <primary-button @click="triggerDownload" v-if="isBigScreen"
        ><div class="header__button">
          Резюме
          <download-icon /></div
      ></primary-button>
      <burger-menu-icon v-else @click="toggleIsMenuOpen" />
      <transition name="menu-fade">
        <div class="nav nav-mobile" v-if="isMenuOpen">
          <div class="nav__item" @click="toggleIsMenuOpen">
            <router-link to="/#skills" class="nav__link">Навыки</router-link>
          </div>
          <div class="nav__item" @click="toggleIsMenuOpen">
            <router-link to="/#exp" class="nav__link">Опыт</router-link>
          </div>
          <div class="nav__item" @click="toggleIsMenuOpen">
            <router-link to="/#about" class="nav__link">Обо мне</router-link>
          </div>
          <div class="nav__item" @click="toggleIsMenuOpen">
            <router-link to="/#projects" class="nav__link">Проекты</router-link>
          </div>
          <primary-button @click="triggerDownload"
            ><div class="header__button">
              Резюме
              <download-icon /></div
          ></primary-button>
        </div>
      </transition></header
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
  position: relative;

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

  @media (max-width: 640px) {
    & {
      font-size: 32px;
    }
  }

  &-mobile {
    flex-flow: column nowrap;
    position: absolute;
    top: 63px;
    left: -16px;
    background: $zinc-100;
    z-index: 40;
    width: calc(100% + 32px);
    height: 100dvh;
    padding: 16px;
    box-sizing: border-box;

    @media (min-width: 640px) {
      display: none;
    }
  }

  &__link {
    text-decoration: none;
    color: $primary-black;
    transition: all 0.3s;

    &:hover {
      text-decoration: underline;
      color: $primary-neutral;
    }

    &:active {
      text-decoration: underline;
      color: $primary-neutral;
    }
  }
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s;
}

.menu-fade-enter,
.menu-fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .header {
    padding: 16px 0px;
  }
}
</style>
