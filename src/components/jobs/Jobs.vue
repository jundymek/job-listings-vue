<template>
  <div class="wrapper">
    <div
      v-for="job in filteredJobs"
      :key="job.id"
      class="box"
      :class="{ isFeatured: job.featured }"
    >
      <div class="left">
        <img
          :src="require(`@/images/${job.logo}`)"
          :alt="job.company + ' logo'"
          class="logo"
        />
        <div class="content">
          <div class="title-wrapper">
            <h2 class="title">{{ job.company }}</h2>
            <div class="badge-wrapper">
              <Badge type="new" v-if="job.new" />
              <Badge type="featured" v-if="job.featured" />
            </div>
          </div>
          <span class="position">{{ job.position }}</span>
          <div class="options">
            <span>{{ job.postedAt }}</span>
            <span>{{ job.contract }}</span>
            <span>{{ job.location }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <button class="badge" @click="addSortElement(job.role)">
          {{ job.role }}
        </button>
        <button class="badge" @click="addSortElement(job.level)">
          {{ job.level }}
        </button>
        <button
          v-for="language in job.languages"
          :key="language"
          class="badge"
          @click="addSortElement(language)"
        >
          {{ language }}
        </button>
        <button
          v-for="tool in job.tools"
          :key="tool"
          class="badge"
          @click="addSortElement(tool)"
        >
          {{ tool }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFilterJobs } from "@/composables/useFilterJobs";
import Badge from "./Badge.vue";

export default defineComponent({
  components: { Badge },
  setup() {
    const { filteredJobs, addSortElement } = useFilterJobs();
    return { filteredJobs, addSortElement };
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
.box {
  background: #fff;
  box-sizing: border-box;
  width: 80%;
  height: 154px;
  margin: 20px auto;
  padding: 10px 20px;
  display: flex;
  border-radius: 4px;
  position: relative;
  box-shadow: 0px 6px 35px -18px hsl(180, 29%, 50%);
  @media (max-width: $desktop) {
    width: 90%;
    padding: 40px 20px;
    margin: 60px auto;
    height: auto;
    flex-direction: column;
  }

  &.isFeatured::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 100%;
    width: 5px;
    background-color: $desaturatedDarkCyan;
  }
}
.left,
.right {
  width: 50%;
  display: flex;
  padding: 10px 10px;
  align-items: center;
  @media (max-width: $desktop) {
    width: 100%;
    padding: 10px 0px;
  }
}

.left {
  @media (max-width: $desktop) {
    flex-direction: column;
    padding-bottom: 20px;
    border-bottom: 1px solid $darkGrayishCyan;
  }
}

.right {
  justify-content: flex-end;
  @media (max-width: $desktop) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

.logo {
  width: 86px;
  height: 86px;
  @media (max-width: $desktop) {
    width: 46px;
    height: 46px;
    position: absolute;
    top: 0;
    left: 20px;
    transform: translateY(-50%);
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
  @media (max-width: $desktop) {
    margin-left: 0px;
  }
}

.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.title {
  font-size: 14px;
  margin: 0;
  color: $desaturatedDarkCyan;
}

.position {
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.1s;
  margin-bottom: 4px;
  &:hover {
    color: $desaturatedDarkCyan;
  }
  @media (max-width: $desktop) {
    font-size: 16px;
  }
}

.options {
  display: flex;
  width: 100%;
  margin: 10px 0 0 -10px;
  font-size: 14px;
  color: $darkGrayishCyan;

  span {
    padding: 0 10px;
    position: relative;
    &:not(:last-child)::after {
      position: absolute;
      content: "*";
      font-size: 14px;
      right: -4px;
      top: 50%;
      transform: translateY(-20%);
    }
  }
}

.badge-wrapper {
  display: flex;
  margin-left: 14px;
}

.badge {
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
