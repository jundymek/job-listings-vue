<template>
  <h1 class="sr-only">Job listings with filtering</h1>
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

* {
  box-sizing: border-box;
}

body {
  background: $lightGrayishCyan;
  margin: 0;
  overflow-y: scroll;
}

.sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.slide-fade-enter-from {
  transform: translateY(-50px);
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-move
/* .slide-fade-leave-active below version 2.1.8 */ {
  transition: transform 1s;
}
</style>
