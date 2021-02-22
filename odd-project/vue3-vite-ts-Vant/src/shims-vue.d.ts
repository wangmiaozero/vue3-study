/*
 * @Description: 
 * @Version: 0.1
 * @Autor: wangmiao
 * @Date: 2021-02-22 22:29:35
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-22 22:44:24
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}