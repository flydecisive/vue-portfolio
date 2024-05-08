<script>
import AppContainer from "@/components/AppContainer.vue";
import AppHeader from "./components/AppHeader.vue";
import MainView from "@/views/MainView.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: { AppContainer, AppHeader, MainView, AppFooter },
};
</script>

<template>
  <app-header />
  <main-view />
  <app-footer />
</template>

<style scoped></style>
