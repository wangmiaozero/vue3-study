<template>
  <div class="vui__scrollbar" ref="ref__box" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" v-resize="handleResize">
        <div :class="['vscroll__wrap', {native: native}]" ref="ref__wrap" @scroll="handleScroll">
            <div class="vscroll__view" v-resize="handleResize">
                <slot />
            </div>
        </div>
        <div :class="['vscroll__bar vertical']" @mousedown="handleClickTrack($event, 0)" :style="{'width': parseInt(size)>=0 ? parseInt(size)+'px' : '', 'z-index': parseInt(zIndex)>=0 ? parseInt(zIndex) : ''}">
            <div class="vscroll__thumb" ref="ref__barY" :style="{'background': color, 'height': barHeight+'px'}" @mousedown="handleDragThumb($event, 0)"></div>
        </div>
        <div :class="['vscroll__bar horizontal']" @mousedown="handleClickTrack($event, 1)" :style="{'height': parseInt(size)>=0 ? parseInt(size)+'px' : '', 'z-index': parseInt(zIndex)>=0 ? parseInt(zIndex) : ''}">
            <div class="vscroll__thumb" ref="ref__barX" :style="{'background': color, 'width': barWidth+'px'}" @mousedown="handleDragThumb($event, 1)"></div>
        </div>
    </div>
</template>

<script>
/**
 * @Desc     Vue3.0虚拟滚动条组件V3Scroll
 * @Time     andy by 2021-01
 * @About    Q：282310962  wx：xy190310
 */
import { onMounted, ref, reactive, toRefs, nextTick } from 'vue'
import domUtils from './utils/dom'

export default {
  name: 'HelloWorld',
  props: {
    // 是否显示原生滚动条
    native: Boolean,
    // 是否自动隐藏滚动条
    autohide: Boolean,
    // 滚动条尺寸
    size: { type: [Number, String], default: '' },
    // 滚动条颜色
    color: String,
    // 滚动条层级
    zIndex: null
  },
       /**
         * Vue3.x自定义指令写法
         */
        // 监听DOM尺寸变化
        directives: {
            'resize': {
                beforeMount: function(el, binding) {
                    let width = '', height = '';
                    function get() {
                        const elStyle = el.currentStyle ? el.currentStyle : document.defaultView.getComputedStyle(el, null);
                        if (width !== elStyle.width || height !== elStyle.height) {
                            binding.value({width, height});
                        }
                        width = elStyle.width;
                        height = elStyle.height;
                    }
                    el.__vueReize__ = setInterval(get, 16);
                },
                unmounted: function(el) {
                    clearInterval(el.__vueReize__);
                }
            }
        },
        setup(props, context) {
            const ref__box = ref(null)
            const ref__wrap = ref(null)
            const ref__barX = ref(null)
            const ref__barY = ref(null)

            const data = reactive({
                barWidth: 0,            // 滚动条宽度
                barHeight: 0,           // 滚动条高度
                ratioX: 1,              // 滚动条水平偏移率
                ratioY: 1,              // 滚动条垂直偏移率
                isTaped: false,         // 鼠标光标是否按住滚动条
                isHover: false,         // 鼠标光标是否悬停在滚动区
                isShow: !props.autohide, // 是否显示滚动条
            })

            onMounted(() => {
                nextTick(() => {
                    updated()
                })
            })

            // 鼠标滑入
            const handleMouseEnter = () => {
                data.isHover = true
                data.isShow = true
                updated()
            }

            // 鼠标滑出
            const handleMouseLeave = () => {
                data.isHover = false
                data.isShow = false
            }

            // 拖动滚动条
            const handleDragThumb = (e, index) => {
                const elWrap = ref__wrap.value
                const elBarX = ref__barX.value
                const elBarY = ref__barY.value

                data.isTaped = true
                let c = {}
                // 阻止默认事件
                domUtils.isIE() ? (e.returnValue = false, e.cancelBubble = true) : (e.stopPropagation(), e.preventDefault())
                document.onselectstart = () => false

                if(index == 0) {
                    c.dragY = true
                    c.clientY = e.clientY
                }else {
                    c.dragX = true
                    c.clientX = e.clientX
                }

                // ...
            }

            // 点击滚动槽
            const handleClickTrack = (e, index) => {
                // ...
            }

            // 更新滚动区
            const updated = () => {
                if(props.native) return
                const elBox = ref__box.value
                const elWrap = ref__wrap.value
                const elBarX = ref__barX.value
                const elBarY = ref__barY.value

                let barSize = domUtils.getScrollBarSize()

                // 垂直滚动条
                if(elWrap.scrollHeight > elWrap.offsetHeight) {
                    data.barHeight = elBox.offsetHeight **2 / elWrap.scrollHeight
                    data.ratioY = (elWrap.scrollHeight - elBox.offsetHeight) / (elBox.offsetHeight - data.barHeight)
                    elBarY.style.transform = `translateY(${elWrap.scrollTop / data.ratioY}px)`
                    // 隐藏系统滚动条
                    if(barSize) {
                        elWrap.style.marginRight = -barSize + 'px'
                    }
                }else {
                    data.barHeight = 0
                    elBarY.style.transform = ''
                    elWrap.style.marginRight = ''
                }

                // 水平滚动条
                // ...
            }

            // 滚动区元素/DOM尺寸改变
            const handleResize = () => {
                // 执行更新操作
            }

            // ...

            return {
                ...toRefs(data),
                ref__box, ref__wrap, ref__barX, ref__barY,

                handleMouseEnter, handleMouseLeave,
                handleDragThumb, handleClickTrack,
                updated,
                
                // ...
            }
        }
    }
</script>
