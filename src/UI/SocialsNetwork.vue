<script>
import VkIcon from "../components/icons/social-network/VkIcon.vue";
import TelegramIcon from "@/components/icons/social-network/TelegramIcon.vue";
import GithubIcon from "@/components/icons/social-network/GithubIcon.vue";

export default {
  name: "SocialsNetwork",
  components: {
    VkIcon,
    GithubIcon,
    TelegramIcon,
  },
};
</script>

<template>
  <div class="socials">
    <a class="socials__item" href="https://vk.com/flydecisive" target="_blank">
      <vk-icon />
    </a>
    <a class="socials__item" href="https://t.me/maks_muhin" target="_blank">
      <telegram-icon />
    </a>
    <a
      class="socials__item"
      href="https://github.com/flydecisive"
      target="_blank"
    >
      <github-icon />
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.socials {
  display: flex;
  align-items: center;
  gap: 32px;

  &__item {
    display: block;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $primary-black;
    border-radius: 4px;
    transition: all 0.3s;

    &:hover {
      background: $primary-black;
      cursor: pointer;
    }
  }
}
</style>
