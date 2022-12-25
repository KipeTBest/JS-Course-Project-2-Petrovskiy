import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Cart from "@/views/Cart";
import Order from "@/views/Order";
import Profile from "@/views/Profile";

Vue.use(Router);

let router = new Router({
    routes: [
        {path: '/', component: Home, props: true},
        {path: '/cart', component: Cart, props: true},
        {path: '/profile', component: Profile, props: true},
        {path: '/order', component: Order, props: true}
    ]
})

export default router;