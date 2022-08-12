<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ $t("m.a") }}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">{{ $t("m.b") }}</a>.
    </p>
    <h3>{{ $t("m.c") }}</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">{{ $t("m.d") }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">{{ $t("m.e") }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">{{ $t("m.f") }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">{{ $t("m.g") }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">{{ $t("m.h") }}</a></li>
    </ul>
    <h3>{{ $t("m.i") }}</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">{{ $t("m.j") }}</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">{{ $t("m.k") }}</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">{{ $t("m.m") }}</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">{{ $t("m.n") }}</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">{{ $t("m.o") }}</a></li>
    </ul>
    <h3>{{ $t("m.p") }}</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">{{ $t("m.q") }}</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">{{ $t("m.r") }}</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">{{ $t("m.s") }}</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">{{ $t("m.t") }}</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">{{ $t("m.w") }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data () {
        return {
        };
    },
    created () {
        console.log(process.env.NODE_ENV);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
