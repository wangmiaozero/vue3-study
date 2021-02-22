/*
 * @Description: routes
 * @Version: 0.1
 * @Autor: wangmiao
 * @Date: 2021-02-22 22:29:35
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-22 22:42:47
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("../views/Login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;