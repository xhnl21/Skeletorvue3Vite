import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import GlobPlugin from "vite-plugin-glob";
import i18nResources from "vite-plugin-i18n-resources";
import { resolve } from "path";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
        GlobPlugin(),
        i18nResources({
            path: resolve(__dirname, "src/lang"),
            compositionOnly: false,
            globalSFCScope: true
        })
    ],
    server: {
        watch:{
            usePolling: true
        }
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.esm-bundler.js"
        }
    },
    define: {
        __VUE_I18N_LEGACY_API__: JSON.stringify(false),
        __VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
        __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
        NODE_ENV: JSON.stringify("production"),
        path: JSON.stringify(resolve(__dirname, "src/store/index")),
        store:JSON.stringify("demo")
    }
});
