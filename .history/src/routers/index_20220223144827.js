import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/music",
      component: () => import("@/views/music")
    }
  ]
});

export default router;
