// 封装函数调用alert
import TipsHtml from './src/index.vue'
import { h,render } from 'vue'

function clickClose (e) {
    console.log(e,'clickClose');
    e.target.parentNode.remove()
}

function tips (msg="tips") {
    // 1. 调用h把组件变成组件虚拟dom VNode
    let id = 'tips_'+new Date().getTime()
    const VNode = h(TipsHtml,{ 
        msg,
        onClick: clickClose,
     })// js对象  
    // 2. 准备挂载节点
    const container = document.createElement('div')
    container.id = id
    document.body.appendChild(container)
    // 3. 渲染虚拟dom到真实dom
    render(VNode,container)
}

export { tips }