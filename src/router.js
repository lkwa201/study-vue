import { createRouter, createWebHistory } from "vue-router";
import MainHome from "./components/MainHome.vue"
import HelloWorld from './components/HelloWorld.vue'

// function loadRoute(path) {
//     let route = null;
//     try {
//         require(`@views${path}.vue`);
//         route = {
//             name: path,
//             path: path,
//             component: () => import(`@views${path}.vue`)
//         }
//     } catch(error) {
//         console.log('err');
        
//     }
//     return route;
// }

const routes = [
    {
        path: '/MainHome',
        component: MainHome
    },
    {
        path: '/HelloWorld',
        component: HelloWorld
    },
];

const router = new createRouter({
    history:createWebHistory(),
    base : process.env.BASE_URL,
    routes
});

export default router;