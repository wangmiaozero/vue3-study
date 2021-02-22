/*
 * @Description: ant
 * @Version: 0.1
 * @Autor: wangmiao
 * @Date: 2021-02-22 22:29:35
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-22 22:43:13
 */
import {Button} from 'vant'
const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
  }) {
    Vue.component(Button.name, Button);
   
  }
};
export default ant;