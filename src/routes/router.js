import { createRouter, createWebHistory } from 'vue-router'
// import Dashboard from '../pages/Dashboard.vue'
import MainLayout from '../pages/MainLayout.vue'
// import Setting from '../pages/Setting.vue'
// import SubmittedOffers from "../pages/SubmittedOffers.vue"

const routes = [
    {

        path: '/',
        name: 'mainlayout',
        component: MainLayout
    },
    // {

    //     path: '/',
    //     name: 'dashboard',
    //     component: Dashboard
    // },
    // {
    //     path: '/aircraft',
    //     name: 'aircraft-request',
    //     component: Dashboard
    // },
    // {
    //     path: '/availability',
    //     name: 'aircraft-availability',
    //     component: Dashboard
    // },
    // {
    //     path: '/submitted',
    //     name: 'submitted-offers',
    //     component: SubmittedOffers
    // },

    // {
    //     path: '/invoice',
    //     name: 'invoices',
    //     component: Setting
    // },
    // {
    //     path: "/",
    //     name: "dashboard",
    //     redirect: { name: "bashboard" },
    //     component: () => import("layouts/Dashboard.vue"),
    //     children: [
    //         {
    //             path: "/",
    //             name: "aircraft-request",
    //             component: () => import("pages/admin/Dashboard.vue"),

    //         },
    //         {
    //             path: "/admin",
    //             name: "",
    //             component: () => import("pages/admin/TransactionsManagement.vue"),

    //         },
    //         {
    //             path: "/admin",
    //             name: "aircraft-availability",
    //             component: () => import("pages/admin/UserDetail.vue"),

    //         },
    //     ]
    // },


]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;