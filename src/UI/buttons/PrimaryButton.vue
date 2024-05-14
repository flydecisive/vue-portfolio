<script>
export default {
  name: "PrimaryButton",
};
</script>

<template>
  <button class="button button-primary"><slot></slot></button>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.button-primary {
  background: $primary-black;
  color: $primary-white;
  border: 1px solid transparent;

  &:hover {
    background: $primary-neutral;
  }

  &:active {
    border-color: $primary-black;
    background: $primary-white;
    color: $primary-black;
  }
}
</style>
