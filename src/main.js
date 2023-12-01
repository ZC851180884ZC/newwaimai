import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import 'amfe-flexible'
import Store from './store'
import router from './router'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
//若配置了无需注册
// import { Icon } from 'vant';

// 1. 引入你需要的组件
// import { Button } from 'vant';
// 2. 引入组件样式
// import 'vant/lib/index.css';


const app = createApp(App)
app.use(router).use(Store)
app.mount('#app')
// 3. 注册你需要的组件
// app.use(Button)