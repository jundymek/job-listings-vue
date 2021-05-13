<template>
  <Jobs />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Jobs from "./components/jobs/Jobs.vue";
import json from "../data.json";
export default defineComponent({
  name: "App",
  components: {
    Jobs,
  },
  data() {
    console.log(json);
    return {
      myJson: json,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
