import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/js/common'

import '@/assets/css/resets.css'
import '@/assets/css/border.css'
import '@/assets/css/iconfont.css'

import { navCurrent } from '@/directives'

createApp(App).directive('navCurrent', navCurrent).use(store).use(router).mount('#app')
