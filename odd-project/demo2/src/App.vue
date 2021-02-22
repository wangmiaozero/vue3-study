<template>
  <!-- //自定义参数 -->
<v3-scroll size="12" color="#a96950" zIndex="2021">
    <p>这里显示自定义内容！</p>
    <img alt="Vue logo" src="./assets/logo.png" />
</v3-scroll>

<!-- //scroll事件处理 -->
<v3-scroll @scroll="handleScroll">
    <p>这里显示自定义内容！</p>
    <img alt="Vue logo" src="./assets/logo.png" />
</v3-scroll>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>
