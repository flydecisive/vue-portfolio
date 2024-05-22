<script>
export default {
  name: "AppContainer",
};
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  margin: 0 auto;
  width: 1440px;
  padding: 0px 80px;
  box-sizing: border-box;
}

@media (max-width: 640px) {
  .container {
    margin: 0;
    width: 100%;
    max-width: 640px;
    padding: 0px 16px;
  }
}
</style>
