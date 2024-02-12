<template>
  <div class="cate">
    <div class="cate-item">
      <div class="cate-name">
        {{ props.cateName }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cateName: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style lang="less" scoped>
.cate {
  padding: 20px 30px;
  // background-color: salmon;
  .cate-name {
  }
}
</style>
