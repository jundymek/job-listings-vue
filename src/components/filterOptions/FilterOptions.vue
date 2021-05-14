<template>
  <div class="background">
    <div v-if="sortBy.length" class="wrapper">
      <button
        class="button"
        v-for="element in sortBy"
        :key="element"
        @click="removeSortElement(element)"
      >
        {{ element }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useFilterJobs } from "@/composables/useFilterJobs";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { sortBy, removeSortElement } = useFilterJobs();
    return { sortBy, removeSortElement };
  },
});
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 150px;
  background-color: $desaturatedDarkCyan;
  background-image: url("~@/images/bg-header-desktop.svg");
  background-size: cover;
  /* background-attachment: fixed;
  background-position: center; */
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
}
.wrapper {
  width: 80%;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.button {
  border: 0;
  padding: 10px 45px 10px 10px;
  margin: 10px 10px;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 30px;
    height: 100%;
    background: $veryDarkGrayishCyan;
    background-image: url("~@/images/icon-remove.svg");
    background-size: 14px 14px;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
