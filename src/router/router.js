import { createRouter, createWebHistory } from "vue-router";

import MainView from "@/views/MainView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/projects",
    component: ProjectsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
