import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import ShoppingCart from "../views/ShoppingCart";
import User from "@/views/User";
import Login from "@/views/Login";
import Register from "@/views/Register";
import GoodsDetail from "@/views/GoodsDetail";
import ConfirmOrder from "@/views/ConfirmOrder";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/shoppingCart',
        name: 'ShoppingCart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: ShoppingCart
    },
    {
        path: '/goodsDetail/:id',
        name: 'GoodsDetail',
        component: GoodsDetail
    },
    {
        path: '/user',
        name: 'User',
        component: User,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path:'/confirmOrder',
        name:'ConfirmOrder',
        component: ConfirmOrder
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    const user = sessionStorage.getItem("User");
    if (user !==null && user!==undefined){
        next()
    }
    else {
        if(to.name === 'Login' || to.name === 'Register'){
            next();
        }else{
            next({name: 'Login', path:'/login'});
        }
    }
})
export default router
