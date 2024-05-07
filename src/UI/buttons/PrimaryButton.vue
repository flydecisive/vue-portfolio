<script>
export default {
  name: "PrimaryButton",
};
</script>

<template>
  <button class="button-primary"><slot></slot></button>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.button-primary {
  border-radius: 4px;
  padding: 15px 20px;
  box-sizing: border-box;
  background: $primary-black;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: $primary-white;
  border: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background: $primary-neutral;
  }

  &:active {
    border-color: $primary-black;
    background: $primary-white;
    color: $primary-black;
  }
}
</style>
