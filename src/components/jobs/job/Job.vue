<template>
  <section class="box" :class="{ isFeatured: job.featured }">
    <div class="wrapper">
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
    <SortOptions :job="job" />
  </section>
</template>

<script lang="ts">
import { JobType } from "@/composables/useFilterJobs";
import { defineComponent, PropType } from "vue";
import Badge from "./Badge.vue";
import SortOptions from "./SortOptions.vue";

export default defineComponent({
  components: { Badge, SortOptions },
  props: {
    job: {
      type: Object as PropType<JobType>,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss" scoped>
.box {
  background: #fff;
  width: 80%;
  height: 154px;
  margin: 20px auto;
  padding: 10px 20px;
  display: flex;
  border-radius: 4px;
  position: relative;
  transition: all 1s;
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

.wrapper {
  width: 50%;
  display: flex;
  padding: 10px 10px;
  align-items: center;
  @media (max-width: $desktop) {
    flex-direction: column;
    width: 100%;
    padding: 10px 0px;
    padding-bottom: 20px;
    border-bottom: 1px solid $darkGrayishCyan;
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
</style>
