<template>
  <el-scrollbar @scroll="handleScroll">
    <div class="page-main">
      <div class="container">
        <navbar :scroll-top="scrollTop"></navbar>
        <search></search>
        <template v-for="item in cates">
          <cate :cate="item"></cate>
        </template>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import navbar from "@/views/navbar/index.vue";
import search from "@/views/search/index.vue";
import { ref } from "vue";
import { cates } from "@/views/category/cates.ts";
import cate from "../category/cate.vue";

const scrollTop = ref(0);
const handleScroll = (e: { scrollLeft: number; scrollTop: number }) => {
  scrollTop.value = e.scrollTop;
};

defineOptions({
  name: "PageMain",
});
</script>

<style lang="less" scoped>
.page-main {
  width: calc(100% - 9px);
  max-height: 100%;
  top: @nav-height;
  transition: all 0.5s ease-out;
  z-index: 0;
}
.container {
  min-width: calc(100% - 20px);
  height: 2500px;
}
</style>
