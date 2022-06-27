import  { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/common.css"
import api from './api/index'

// Vue.prototype.$api = api
// Vue.config.productionTip =false


const app = createApp(App)

app.use(router).mount('#app')
app.config.globalProperties.$api = api;