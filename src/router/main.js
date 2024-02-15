import { createRouter,  createWebHistory } from "vue-router"; 
import Home  from  "../pages/Home.vue"; 
import Names from "../pages/Names.vue";
import  Markdown  from  "../pages/Markdown.vue";
import Calculator  from  "../pages/Calculator.vue";
import  Model  from  "../pages/ReuseableModel.vue";
import  Chat  from  "../pages/Chat.vue";



const routes = [
    { path: '/', component: Home },
    { path: '/igbo-names', component: Names },
    { path:  '/mark-down',  component :  Markdown},
    { path: '/calculator',  component:  Calculator},
    { path: '/reuseable-model',  component :  Model},
    { path : '/life-chat',   component  :  Chat },
];


const router =   createRouter({

    history:   createWebHistory(),
    routes, 
});

export  default  router