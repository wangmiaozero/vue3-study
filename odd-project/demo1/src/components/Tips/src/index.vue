<script setup>
/* 

# 需求描述

1. 点击按钮 让弹框显示
2. 封装一个方法通过命令方式的调用让弹框展示
  this.$message()
  alert() 在任何你想要显示弹框的条件下只要调用方法就可以展示弹框

# 思路分析

1. 核心思路 把本来自动渲染组件方式变成一个手动渲染
2. 学习一下vue 暴露出来和渲染相关的api
 h render
 h: 把一个组件变成一个VNode
 render: 把VNode 熏染成一个真实dom 节点
3. 把已经写好的 Alert 组件调用 h 函数 变成VNode
4. 准备一个渲染挂载的节点
5. 调用 render api 把 VNode 挂载到准备好的节点上 完成渲染

*/

defineProps({
  msg: String
})

</script>

<template>
  <div class="tips">{{msg}}</div>
</template>


<style scoped>
.tips {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 12px;
  background-color: #f0f9eb;
  color: #67c23a;
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity .2s;
  user-select: none;
}
</style>
