import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./config/axiosApi";
import i18n from "./lang";
import resquesMixin from "./libGlobal/resques";
import resquesAMixin from "./libGlobal/resquesA";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();
createApp(App)
    .mixin(resquesMixin)
    .mixin(resquesAMixin)
    .use(vuetify)
    .use(i18n)
    .use(router)
    .use(store)
    .mount("#app");
