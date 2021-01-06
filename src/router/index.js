import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import ShoppingCart from "../views/ShoppingCart";
import GoodsDetail from "../views/GoodsDetail";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/ShoppingCart',
        name: 'ShoppingCart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: ShoppingCart
    },
    {
        path: '/goodsDetail/:id',
        name: 'goodsDetail',
        component: GoodsDetail
    }
    // {
    //     path: '/User/:id',
    //     name: 'User',
    // }

]

const router = new VueRouter({
    routes
})

export default router
