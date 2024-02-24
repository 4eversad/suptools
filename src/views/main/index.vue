<template>
  <el-scrollbar ref="scrollRef" @scroll="handleScroll">
    <div class="page-main">
      <div class="container">
        <navbar :scroll-top="scrollTop"></navbar>
        <search></search>
        <template v-for="item in cates">
          <suspense>
            <cate :cate="item"></cate>
          </suspense>
        </template>
      </div>
    </div>
    <back-top></back-top>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const cate = defineAsyncComponent(() => import("../category/cate.vue"));
import navbar from "@/views/navbar/index.vue";
import search from "@/views/search/index.vue";
import { ref } from "vue";
import { cates } from "@/constant/cates";
// import cate from "../category/cate.vue";
import backTop from "@/components/backTop.vue";

const scrollRef = ref();
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
@/constant/cates
