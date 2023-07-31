import { createRouter, createWebHistory } from 'vue-router'
import Authroutes from './Authroutes.js';
import MainRoutes from './MainRoutes.js';
const routes=[ ...Authroutes,...MainRoutes]
const router=createRouter({
    history: createWebHistory(),
    routes
})
export default router;