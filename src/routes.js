// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Biography from "./components/Biography";
import Home from "./components/Home.vue";
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/', component: Home,
        children: [{
            path: 'manifiesto',
            component: Home,
            meta: { page: 2 },
            children: [{
                path: 'habla',
                component: Home,
                meta: { page: 3, principle: 1 }
            },
            {
                path: 'descubre',
                component: Home,
                meta: { page: 3, principle: 2 }
            },
            {
                path: 'significa',
                component: Home,
                meta: { page: 3, principle: 3 }
            },
            {
                path: 'crea',
                component: Home,
                meta: { page: 3, principle: 4 }
            }]
        }]
    },
    {
        path: '/bio', component: Biography
    }]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
/*
export const router = new VueRouter({
    routes // short for `routes: routes`
})
*/


export default new VueRouter({ routes })