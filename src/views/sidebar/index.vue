<template>
  <el-scrollbar>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      style="--el-menu-hover-bg-color: #e5e5e5"
    >
      <div class="logo">logo</div>
      <template v-for="item in cates" :index="item.id" :key="item.id">
        <el-sub-menu v-if="item.subCate" :index="item.id">
          <template #title>
            <i class="menu-icon iconfont" :class="item.icon"></i>

            {{ item.cateName }}
          </template>
          <el-menu-item v-for="subItem in item.subCate">{{
            subItem.cateName
          }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else>
          <i class="menu-icon iconfont" :class="item.icon"></i>
          <template #title>{{ item.cateName }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/store";
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
