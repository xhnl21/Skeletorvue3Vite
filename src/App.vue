<template>
  <v-app>
    <v-main>
      <MainMenu/>
          <div class="refresh-template">
            <div class="refresh-template-content" @click="refreshApp">
              <div class="refresh-template-title">
                <span class="icon">
                  <button class="btn-refresh-sync">
                    <i class="fas fa-sync-alt"></i>
                  </button>
                </span>
                <span class="title">New content is available; please refresh.</span>
              </div>
            </div>
          </div>
          <br>
          <div class="flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <SelectLanguage/>
      </nav>
      <router-view />

      <HelloWorld/>
      <MainFooter/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SelectLanguage from "./components/App/SelectLanguage.vue";
import MainFooter from "./views/Layouts/mainFooterView.vue";
import MainMenu from "./views/Layouts/mainMenuView.vue";
export default {
    name: "App",
    components: {
    // HelloWorld,
        SelectLanguage,
        MainMenu,
        MainFooter
    },
    data () {}
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
