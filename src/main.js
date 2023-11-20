
import router from './router/router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
createApp(App)
    //Add the line below to the file to instantiate it
    .use(createPinia())
    .use(router)
    .mount('#app')