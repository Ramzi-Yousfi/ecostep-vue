
// fait moi un router avec vue router

import {createRouter, createWebHistory} from "vue-router";
import Article from "@/pages/Article.vue";
import Home from "@/pages/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/article/:id",
        name: "article",
        component: Article,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
