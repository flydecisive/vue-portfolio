import "@/assets/styles/style.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";

const app = createApp(App);

app.use(router);
app.mount("#app");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
