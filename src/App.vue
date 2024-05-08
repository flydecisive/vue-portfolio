<script>
import AppContainer from "@/components/AppContainer.vue";
import AppHeader from "./components/AppHeader.vue";
import MainView from "@/views/MainView.vue";

export default {
  components: { AppContainer, AppHeader, MainView },
};
</script>

<template>
  <app-container>
    <app-header />
    <main-view />
  </app-container>
</template>

<style scoped></style>
