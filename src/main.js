import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {registerComponents} from "@/registerComponents";
import {directives} from "@/directives";
import {createPinia} from "pinia";

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(directives)
    .use(registerComponents)
    .use(router)
    .mount('#app')
