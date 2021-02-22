import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)
// 引入弹窗组件v3popup
import V3Popup from './components/v3popup'

app.use(V3Popup)
app.mount('#app')
