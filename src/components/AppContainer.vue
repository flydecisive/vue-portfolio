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
</style>
