/*
 * @Description: vite版本不需要配置组件的按需加载，因为Vant 3.0 内部所有模块都是基于 ESM 编写的，天然具备按需引入的能力，但是样式必须全部引入137.2k
 * @Version: 0.1
 * @Autor: wangmiao
 * @Date: 2021-02-22 22:29:35
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-22 22:31:01
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ant from "./utils/ant";
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式
import "./utils/rem"
 // 全局引入样式
createApp(App)
.use(router)
.use(store)
.use(ant)
.mount('#app')