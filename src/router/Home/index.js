import HomeDash from "../../views/Home/Home.vue";
import HomeAbout from "../../views/Home/HomeAbout.vue";
import AboutUsView from "../../views/AboutUs/AboutUs.vue";
const routes = [
    {
        path: "/",
        name: "HomeDash",
        component: HomeDash,
        meta: { requiresAuth: false }
    },
    {
        path: "/HomeAbout",
        name: "HomeAbout",
        component: HomeAbout,
        meta: { requiresAuth: false }
    },
    {
        path: "/about-us",
        name: "about-us",
        component: AboutUsView,
        meta: { requiresAuth: false }
    }
];
export default routes;