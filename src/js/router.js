import { createWebHistory, createRouter } from "vue-router";

const routes = [{ path: "/", component: Home, name: "home" }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
