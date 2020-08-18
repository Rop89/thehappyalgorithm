import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ProductivityHacks from "../views/ProductivityHacks.vue";
import Podcasts from "../views/Podcasts.vue";
import Book from "../views/Book.vue";
import Books from "../views/Books.vue";
import GetInTouch from "../views/GetInTouch.vue";
import Subscribe from "../views/Subscribe.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/productivityhacks",
      name: "productivityhacks",
      component: ProductivityHacks,
    },
    {
      path: "/podcasts",
      name: "podcasts",
      component: Podcasts,
    },
    {
      path: "/books",
      name: "books",
      component: Books,
    },
    {
      path: "/book/:id",
      name: "book",
      component: Book,
      props: true,
    },
    {
      path: "/getintouch",
      name: "getintouch",
      component: GetInTouch,
    },
    {
      path: "/subscribe",
      name: "subscribe",
      component: Subscribe,
    },
  ],
});
