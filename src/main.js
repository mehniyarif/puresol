import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {registerComponents} from "@/registerComponents";
import {directives} from "@/directives";

createApp(App)
    .use(directives)
    .use(registerComponents)
    .use(router)
    .mount('#app')
