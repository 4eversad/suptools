<template>
  <div class="home-page">
    <div class="home-page--left">
      <sidebar @handle-subItem-click="handleSubItemClick"></sidebar>
      <help></help>
    </div>
    <div class="home-page--right">
      <pageMain></pageMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import sidebar from "@/views/sidebar/index.vue";
import pageMain from "@/views/main/index.vue";
import help from "@/views/help/index.vue";
import { useConfigStore } from "@/store";

const $useConfigStore = useConfigStore();
const currentId = "";
const handleSubItemClick = (id: string) => {};

onMounted(() => {
  $useConfigStore.initState();
});
defineOptions({
  name: "Home",
});
</script>

<style scoped lang="less">
.home-page {
  background-color: @light-themeColor;
  width: 100%;
  display: flex;
  height: 100vh;
}
.home-page--left {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.home-page--right {
  border-left: 1px solid #dcdfe6;
  width: 100%;
  background-color: @light-themeColor;
}
</style>
