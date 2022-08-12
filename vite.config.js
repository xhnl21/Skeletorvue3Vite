import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import GlobPlugin from "vite-plugin-glob";
import i18nResources from "vite-plugin-i18n-resources";
import { resolve } from "path";
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        preTransformRequests: true,
        port: 8000, // default: 3000
        host: "0.0.0.0", // default: localhost,
        timing: false,
        watch:{
            usePolling: true
        }
    },
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
    resolve: {
        alias: {
            "vue": "vue/dist/vue.esm-bundler.js"
        }
    }
});
