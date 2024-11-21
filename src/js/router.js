import { createWebHistory, createRouter } from "vue-router";

import Home from "../components/pages/Home.vue";
import AboutUs from "../components/pages/AboutUs.vue";
import PostsGallery from "../components/pages/PostsGallery.vue";
import Contacts from "../components/pages/Contacts.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/postsgallery", component: PostsGallery, name: "posts.gallery" },
  { path: "/aboutus", component: AboutUs, name: "about.us" },
  { path: "/contacts", component: Contacts, name: "contacts" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
