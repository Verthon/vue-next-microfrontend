import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

export default (selector) => {
  createApp(App).use(router).mount(selector)
}
