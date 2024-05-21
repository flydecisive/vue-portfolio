import { createRouter, createWebHistory } from "vue-router";

import MainView from "@/views/MainView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ProjectView from "@/views/ProjectView.vue";

const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/projects",
    component: ProjectsView,
  },
  {
    path: "/project/:id",
    component: ProjectView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition;
    // }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0, left: 0 };
  },
});

export default router;
