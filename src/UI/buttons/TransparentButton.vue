<script>
export default {
  name: "TransparentButton",
};
</script>

<template>
  <button class="button button-transparent">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.button-transparent {
  border: 1px solid $primary-white;
  color: $primary-white;
  background: transparent;

  &:hover {
    border: 1px solid $zinc-500;
    color: $zinc-500;
  }

  &:active {
    border: 1px solid $zinc-800;
    color: $zinc-800;
  }
}
</style>
