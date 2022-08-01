<template>
  <div>
    <h1>{{ $t("m.pg_demo") }}</h1>
    <div>
        {{info}}<br><br>
        {{info.USD}}<br><br>
        {{info.GBP}}<br><br>
        {{info.EUR}}<br><br>
    </div>
    <div>
        {{infoA}}<br><br>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "HomeAbout",
    components: {},
    data () {
        return {
            apis:{},
            info:{},
            infoA:{}
        };
    },
    created () {
        this.init ();
    },
    methods: {
        init () {
            this.apis = this.$store.getters.apis.About;
            this.initA ();
            this.initB ();
        },
        initA () {
            const url = this.apis.get();
            const type = "get";
            const method = "initA";
            this.resques(type, false, false, false, url, [], method);
        },
        initB () {
            this.resquesA("get", false, false, false, this.apis.getS(3), [], "initB");
        }
    },
    computed: {
        ...mapGetters(["GethttpResques"])
    },
    watch: {
        GethttpResques: function () {
            if (this.GethttpResques) {
                const g = this.$store.getters["GethttpResques"];
                const fun = g[0].function;
                const method = g[0].method;
                const data = g[0].data;
                if (fun === "ReturnHttp") {
                    if (method === "initA") {
                        this.info = data.data.bpi;
                    }
                    if (method === "initB") {
                        this.infoA = data.data.data;
                    }
                }
            }
        }
    }
};
</script>