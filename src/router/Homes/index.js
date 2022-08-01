import HomesDash from "../../views/Homes/Home.vue";
import HomesAbout from "../../views/Homes/About.vue";
const routes = [
    {
        path: "/",
        name: "HomesDash",
        component: HomesDash,
        meta: { requiresAuth: false }
    },
    {
        path: "/homesAbout",
        name: "homesAbout",
        component: HomesAbout,
        meta: { requiresAuth: false }
    }
];
export default routes;