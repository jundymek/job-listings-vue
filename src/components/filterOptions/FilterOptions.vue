<template>
  <div class="background"></div>
  <transition name="slide-fade"
    ><div v-if="sortBy.length" class="wrapper">
      <div class="sort-btn-wrapper">
        <button
          class="button"
          v-for="element in sortBy"
          :key="element"
          @click="removeSortElement(element)"
        >
          {{ element }}
        </button>
      </div>
      <button class="btn-clear" @click="removeAllSortElements()">Clear</button>
    </div>
  </transition>
</template>

<script lang="ts">
import { useFilterJobs } from "@/composables/useFilterJobs";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { sortBy, removeSortElement, removeAllSortElements } =
      useFilterJobs();
    return { sortBy, removeSortElement, removeAllSortElements };
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
  background-repeat: no-repeat;
  z-index: 0;
  @media (max-width: $desktop) {
    background-image: url("~@/images/bg-header-mobile.svg");
  }
}
.wrapper {
  width: 80%;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: -40px;
  border-radius: 4px;
  box-shadow: 0px 6px 35px -18px hsl(180, 29%, 50%);
  @media (max-width: $desktop) {
    width: 90%;
  }
}

.sort-btn-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.button {
  border: 0;
  padding: 8px 45px 8px 10px;
  margin: 10px 8px;
  position: relative;
  color: $desaturatedDarkCyan;
  background-color: $lightGrayishCyanFilter;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 34px;
    height: 100%;
    background: $desaturatedDarkCyan;
    background-image: url("~@/images/icon-remove.svg");
    background-size: 14px 14px;
    background-position: center;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-repeat: no-repeat;
    transition: 0.1s;
  }
  &:hover::after {
    background-color: $veryDarkGrayishCyan;
  }
}

.btn-clear {
  border: none;
  background: none;
  color: $darkGrayishCyan;
  font-size: 14px;
  font-weight: 600;
  padding: 0 36px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: $desaturatedDarkCyan;
  }
  @media (max-width: $desktop) {
    padding: 0 14px;
  }
}
</style>
