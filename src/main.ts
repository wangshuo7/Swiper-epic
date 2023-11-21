import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
// 引入路由
import router from './router'
// 引入 element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入normalize.css
import 'normalize.css'

import 'swiper/css'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router).use(ElementPlus).mount('#app')
