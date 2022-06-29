import  { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/common.css"
import api from './api/index'
import './assets/font/iconfont.css'
import MyComponent from './components/common/MyComponent'
import Tabs from './components/tabs/tabs'
import Tab from './components/tabs/tab'



// Vue.prototype.$api = api
// Vue.config.productionTip =false



const app = createApp(App)

//注册全局组件
app.component("MyComponent", MyComponent)
app.component('Tabs', Tabs)
app.component('Tab', Tab)

app.use(router).mount('#app')
app.config.globalProperties.$api = api;
