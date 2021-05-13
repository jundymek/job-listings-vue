<template>
  <div v-for="job in jobs" :key="job.id" class="box">
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
      <span class="badge">{{ job.role }}</span>
      <span class="badge">{{ job.level }}</span>
      <span v-for="language in job.languages" :key="language" class="badge">{{
        language
      }}</span>
    </div>
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
