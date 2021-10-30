import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Life from "../views/Life.vue";
import Plans from "../views/Plans.vue";
import Site from "../views/Site.vue";
import Quotes from "../views/Quotes.vue";
import Books from "../views/Books.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/life",
    name: "Life",
    component: Life,
  },
  {
    path: "/plans",
    name: "Plans",
    component: Plans,
  },
  {
    path: "/site",
    name: "Site",
    component: Site,
  },
  {
    path: "/quotes",
    name: "Quotes",
    component: Quotes,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
