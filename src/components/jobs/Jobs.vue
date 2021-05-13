<template>
  <div v-for="job in filteredJobs" :key="job.id" class="box">
    <div class="left">
      <img :src="require(`@/images/${job.logo}`)" alt="" class="logo" />
      <div class="content">
        <h2 class="title">{{ job.company }}</h2>
        <p>{{ job.position }}</p>
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
      <span class="badge" @click="addSortElement(job.level)">{{
        job.level
      }}</span>
      <span
        v-for="language in job.languages"
        :key="language"
        class="badge"
        @click="addSortElement(language)"
        >{{ language }}</span
      >
      <span
        v-for="tool in job.tools"
        :key="tool"
        class="badge"
        @click="addSortElement(tool)"
        >{{ tool }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFilterJobs } from "@/composables/useFilterJobs";

export default defineComponent({
  setup() {
    const { filteredJobs, addSortElement, sortBy } = useFilterJobs();
    console.log(filteredJobs.value);
    console.log(sortBy.value);
    return { filteredJobs, addSortElement };
  },
});
</script>

<style lang="scss" scoped>
.box {
  background: #fff;
  width: 80%;
  margin: 10px auto;
  padding: 10px 0;
  display: flex;
}
.left,
.right {
  width: 50%;
  display: flex;
  padding: 10px 10px;
  align-items: center;
}

.right {
  justify-content: flex-end;
}

.logo {
  width: 112px;
  height: 112px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 40px;
}

.title {
  font-size: 15px;
}

.options {
  display: flex;
  width: 100%;
}

.badge {
  margin: 0 10px;
  padding: 5px 10px;
  background: $lightGrayishCyan;
  border-radius: 4px;
}
</style>
