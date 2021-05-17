<template>
  <div class="wrapper">
    <div v-for="job in filteredJobs" :key="job.id">
      <Job :job="job" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFilterJobs } from "@/composables/useFilterJobs";
import Job from "./job/Job.vue";

export default defineComponent({
  components: { Job },
  setup() {
    const { filteredJobs } = useFilterJobs();
    return { filteredJobs };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 80px 0;
  @media (max-width: $desktop) {
    margin: 46px 0;
  }
}
</style>
