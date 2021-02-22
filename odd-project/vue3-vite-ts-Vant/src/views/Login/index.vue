<!--
 * @Description: login
 * @Version: 0.1
 * @Autor: wangmiao
 * @Date: 2021-02-22 22:29:35
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-22 22:39:44
-->
<template>
  <h1>登录页</h1>
  vuex:{{ $store.state.num }}
  <div>
    <van-button type="primary" @click="goLogin">跳转到首页</van-button>
  </div>
</template>
<!--  
<script lang="ts" setup="props">
// import { useRouter } from "vue-router";
// const router = useRouter();
// const goLogin = () => {
//   router.push("/");
// };
 </script>
-->
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const goLogin = () => {
      router.push("/");
    };
    return { goLogin };
  },
});
</script>