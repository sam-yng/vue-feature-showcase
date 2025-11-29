import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './assets/main.css'
import 'highlight.js/styles/default.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).use(router).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
