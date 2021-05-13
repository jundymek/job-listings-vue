<template>
  <div v-for="job in jobs" :key="job.title">
    <p>{{ job }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import jobs from "../../../data.json";

export default defineComponent({
  setup() {
    return { jobs };
  },
});
</script>

<style></style>
