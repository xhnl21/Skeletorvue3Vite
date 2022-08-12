<template>
    <p>{{ $t("m.a") }}</p>
    <select v-model="$i18n.locale">
        <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
        {{ locale }}
            <!-- <label v-if="locale == 'en'">es</label>
            <label v-if="locale == 'sp'">in</label> -->
        </option>
    </select>
</template>
<script>
export default {
    name: "SelectLanguage",
    data () {
        return {
            locales: ["sp", "en"]
        };
    },
    created () {
        this.init ();
    },
    methods: {
        init () {

        },
        selectedLanguage () {
            localStorage.setItem("langLocal", this.language);
            this.array ("refreshApp", true);
        },
        array (name, data) {
            const k = [];
            k.push({ function:name, data:data });
            this.$store.commit("SetRefreshLaguage", k);
        }
    }
};
</script>