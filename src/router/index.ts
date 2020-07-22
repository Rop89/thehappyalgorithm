import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Podcasts from "../views/Podcasts.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/podcasts",
      name: "podcasts",
      component: Podcasts,
    },
    {
      path: "/post/:id",
      name: "post",
      component: Post,
      props: true,
    },
  ],
});

export default router;
