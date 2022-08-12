import { createI18n } from "vue-i18n";
import en from "./en.json";
import es from "./es.json";

const messages = {
    en: {
        m: en
    },
    sp: {
        m: es
    }
};
const i18n = createI18n({
    legacy: true,
    globalInjection: true,
    locale: "sp", // set locale
    fallbackLocale: "en", // set fallback locale
    messages // set locale messages
});

// Only if you want hot module replacement when translation message file change
if (import.meta.hot) {
    import.meta.hot.on("locales-update", (data) => {
        Object.keys(data).forEach((lang) => {
            i18n.global.setLocaleMessage(lang, data[lang]);
        });
    });
}
export default i18n;