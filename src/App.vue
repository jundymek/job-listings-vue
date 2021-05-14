<template>
  <FilterOptions />
  <Jobs />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Jobs from "./components/jobs/Jobs.vue";
import FilterOptions from "./components/filterOptions/FilterOptions.vue";
export default defineComponent({
  name: "App",
  components: {
    Jobs,
    FilterOptions,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap");
#app {
  font-family: "Spartan", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $lightGrayishCyan;
  min-height: 100vh;
}

body {
  background: $lightGrayishCyan;
  margin: 0;
}
</style>
