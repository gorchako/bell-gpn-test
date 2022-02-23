import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/history",
    name: "history",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HistoryView.vue"),
    children: [
      {
        path: "addition",
        meta: {
          actionType: "addition",
        },
      },
      {
        path: "removal",
        meta: {
          actionType: "removal",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
