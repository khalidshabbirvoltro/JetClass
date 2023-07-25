import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import ForgetPassword from '../pages/ForgetPassword.vue'
import Test from '../pages/Test.vue'
const routes=[
{
    path:'/',
    name:'Login',
    component:Login
},
{
    path:'/forget_password',
    name:'ForgetPassword',
    component:ForgetPassword
},
{
    path:'/test',
    name:'Test',
    component:Test
},


]
const router=createRouter({
    history: createWebHistory(),
    routes
})
export default router;