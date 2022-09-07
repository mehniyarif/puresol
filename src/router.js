import { createRouter, createWebHistory } from 'vue-router'
import PuresolCanvas from '@/views/puresol-canvas'

const routes = [
    {
        path: '/',
        name: 'Canvas',
        component: PuresolCanvas
    },
    {
        path: '/puresol-form',
        name: 'Puresol Form',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/puresol-form')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
