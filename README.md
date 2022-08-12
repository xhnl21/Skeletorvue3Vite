# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

#######################################################################3333
Installation commands that I paste in:

Create Vite App
npm init @vitejs/app nameProyect -- --template vue
cd nameProyect 
npm install

Install vuetify
vue add vuetify
selecte option: Vite Preview (Vuetify 3 + Vite)

Install ESLint + Prettier
npm install --save-dev eslint prettier eslint-plugin-vue eslint-config-prettier

npm install sass
npm install bootstrap

Install para reemplezar require()
npm install -D vite-plugin-glob

Install Vue Router
npm install vue-router@4

Install axios
npm install axios -S

Install Vuex
npm install vuex@next --save

npm install vue-i18n@9
npm install -D vite-plugin-i18n-resources

npm install -D vite-plugin-environment


.eslintrc.js:
module.exports = {
extends: [
  'plugin:vue/vue3-essential',
  'prettier',
],
rules: {
  // override/add rules settings here, such as:
  'vue/no-unused-vars': 'error',
},
}

.prettierrc.js:
module.exports = {
    semi: false,
    tabWidth: 4,
    useTabs: false,
    printWidth: 80,
    endOfLine: 'auto',
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
  }
