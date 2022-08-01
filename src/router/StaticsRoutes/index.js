import HomeDash from "../../views/Home/Home.vue";
import HomeAbout from "../../views/Home/HomeAbout.vue";
import AboutUs from "../../views/AboutUs/AboutUs.vue";
import TermView from "../../views/Legal/TermsAndConditions.vue";
const routes = [
    {
        path: "/",
        name: "HomeDash",
        component: HomeDash,
        meta: { requiresAuth: false }
    },
    {
        path: "/about",
        name: "about",
        component: HomeAbout,
        meta: { requiresAuth: false }
    },
    {
        path: "/about-us",
        name: "about-us",
        component: AboutUs,
        meta: { requiresAuth: false }
    },
    {
        path: "/terms-and-conditions",
        name: "terms-and-conditions",
        component: TermView,
        meta: { requiresAuth: false }
    }
];
export default routes;