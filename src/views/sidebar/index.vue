<template>
  <el-scrollbar>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      style="--el-menu-hover-bg-color: #e5e5e5"
      unique-opened
    >
      <div class="logo">logo</div>
      <template v-for="(item, index) in cates" :index="item.id" :key="item.id">
        <el-sub-menu
          @click="scrollToCate(index)"
          v-if="item.subCate"
          :index="item.id"
        >
          <template #title>
            <i class="menu-icon iconfont" :class="item.icon"></i>
            <span>
              {{ item.cateName }}
            </span>
          </template>
          <el-menu-item v-for="subItem in item.subCate">{{
            subItem.cateName
          }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else @click="scrollToCate(index)">
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

const emits = defineEmits<{
  (e: "handle-menu-change", currentIndex: number): void;
}>();
const $configStore = useConfigStore();
const { isCollapse } = storeToRefs($configStore);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const scrollToCate = (index: number) => {
  // emits("handle-menu-change", index);
  const scrollTopOffset =
    document.getElementsByClassName("cate-name")[index].offsetTop - 75;
  document
    .getElementsByClassName("el-scrollbar__wrap")[1]
    .scrollTo({ top: scrollTopOffset, behavior: "smooth" });
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
