<template>
  <el-scrollbar>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="JSON.parse(isCollapse as string)"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="logo">logo</div>
      <el-menu-item v-for="item in cates" :index="item.id" :key="item.id">
        <i class="menu-icon iconfont" :class="item.icon"></i>
        <template #title>{{ item.cateName }}</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/store";
import { Document, Menu as IconMenu, Setting } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { cates } from "@/views/category/cates.ts";

const $configStore = useConfigStore();
const { isCollapse } = storeToRefs($configStore);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

defineOptions({
  name: "PageSidebar",
});
</script>

<style scoped lang="less">
.el-menu {
  background-color: #fff;
  overflow: hidden;
  border-right: none;
}
.el-menu--collapse {
  width: 60px;
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.menu-icon {
  font-size: 20px;
  margin-right: 8px;
}
</style>
