<script>
import AppContainer from "@/components/AppContainer.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: { AppContainer, AppHeader, AppFooter },
};
</script>

<template>
  <app-header />
  <router-view />
  <app-footer />
</template>
