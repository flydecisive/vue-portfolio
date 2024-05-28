<script>
import ArrowUpIcon from "./icons/ArrowUpIcon.vue";

export default {
  name: "PageUp",
  data() {
    return {
      scroll: 0,
    };
  },
  components: {
    ArrowUpIcon,
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    goToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    onScroll() {
      this.scroll = window.scrollY;
    },
  },
};
</script>

<template>
  <div class="pageup" @click="goToTop" v-if="this.scroll > 600">
    <arrow-up-icon />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";

.pageup {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $primary-white;
  border-radius: 50%;
  border: 1px solid $primary-black;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: all 0.3s;

  &:hover {
    background: $zinc-300;
    cursor: pointer;
  }

  &:active {
    background: $zinc-300;
  }
}

@media (max-width: 640px) {
  .pageup {
    bottom: 5px;
    right: 5px;
  }
}
</style>
