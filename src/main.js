import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import resquesMixin from "./libGlobal/resques";
import resquesAMixin from "./libGlobal/resquesA";
import i18n from "./lang";
import "./config/axiosApi";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .mixin(resquesMixin)
    .mixin(resquesAMixin)
    .use(i18n)
    .mount("#app");
