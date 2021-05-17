<template>
  <div class="right">
    <button class="sort-option" @click="addSortElement(job.role)">
      {{ job.role }}
    </button>
    <button class="sort-option" @click="addSortElement(job.level)">
      {{ job.level }}
    </button>
    <button
      v-for="language in job.languages"
      :key="language"
      class="sort-option"
      @click="addSortElement(language)"
    >
      {{ language }}
    </button>
    <button
      v-for="tool in job.tools"
      :key="tool"
      class="sort-option"
      @click="addSortElement(tool)"
    >
      {{ tool }}
    </button>
  </div>
</template>

<script lang="ts">
import { JobType, useFilterJobs } from "@/composables/useFilterJobs";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    job: {
      type: Object as PropType<JobType>,
      required: true,
    },
  },
  setup(props) {
    const { addSortElement } = useFilterJobs();
    return { props, addSortElement };
  },
});
</script>

<style lang="scss" scoped>
.right {
  width: 50%;
  display: flex;
  padding: 10px 10px;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: $desktop) {
    width: 100%;
    padding: 10px 0px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

.sort-option {
  margin: 0 10px;
  padding: 8px 8px 6px 8px;
  background: $lightGrayishCyan;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  font-family: "Spartan", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: $desaturatedDarkCyan;
  transition: 0.1s;
  &:hover {
    background: $desaturatedDarkCyan;
    color: #fff;
  }
  @media (max-width: $desktop) {
    margin: 10px 10px 10px 0;
  }
}
</style>
