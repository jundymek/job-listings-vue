<template>
  <span class="badge2" :style="badgeStyles">
    {{ text }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<"new" | "featured">,
      required: true,
    },
  },
  setup(props) {
    const text = computed(() => {
      return props.type === "new" ? "NEW!" : "FEATURED";
    });
    const badgeStyles = computed(() => {
      return {
        "background-color":
          props.type === "new" ? "hsl(180, 29%, 50%)" : "black",
      };
    });
    return { badgeStyles, text };
  },
});
</script>

<style lang="scss" scoped>
.badge2 {
  color: white;
  margin: 0 4px;
  display: flex;
  justify-content: center;
  font-family: auto;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 8px 4px 8px;
  border-radius: 14px;
}
</style>
