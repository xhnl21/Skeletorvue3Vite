<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld :msg="welcome"/>
    {{ $t("m.welcome") }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../../components/Home/HelloWorld.vue";
export default {
    name: "HomeDash",
    components: {
        HelloWorld
    },
    data () {
        return {
            welcome:""
        };
    },
    created () {
        this.welcome = this.$t("m.welcome");
        console.log(this.$t("m.welcome"));
    }
};
</script>
