import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';
import { httpPlugin } from './utils/http'
import './public/css/reset.scss';
createApp(App).use(store).use(router).use(ElementPlus).use(httpPlugin).mount('#app')
