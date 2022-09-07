import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {registerComponents} from "@/registerComponents";

createApp(App)
    .use(registerComponents)
    .use(router)
    .mount('#app')
