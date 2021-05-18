<template>
  <div class="wrapper">
    <transition-group name="list" tag="div">
      <div v-for="job in filteredJobs" :key="job.id">
        <Job :job="job" />
      </div>
    </transition-group>
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

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter-from /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%);
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%);
}

.list-move {
  transition: transform 0.2s;
}
</style>
