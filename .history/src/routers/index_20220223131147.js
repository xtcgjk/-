// import Vue from "vue";
// import VueRouter from "vue-router";
// Vue.use(VueRouter);
// const router = new VueRouter({
//   mode: "history",
//   routes: []
// });

// export default router;
import { createRouter, createWebHistory } from "vue-router";

const routes = [];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
