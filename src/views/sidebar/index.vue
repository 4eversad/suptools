<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="$configStore.isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="logo">logo</div>
    <el-menu-item index="1">
      <el-icon><setting /></el-icon>
      <template #title>Navigator One</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/store";
import { Document, Menu as IconMenu, Setting } from "@element-plus/icons-vue";

const $configStore = useConfigStore();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="less">
.el-menu {
  background-color: #fffaf1;
  min-height: 100%;
}
.el-menu--collapse {
  width: 60px;
}
.el-menu-vertical-demo {
  min-height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
