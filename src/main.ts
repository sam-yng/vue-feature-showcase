import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)

createApp(App).use(router).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
