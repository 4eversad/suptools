<template>
  <el-scrollbar>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      style="--el-menu-hover-bg-color: #e5e5e5"
      unique-opened
    >
      <div class="logo">logo</div>
      <template v-for="(item, index) in cates" :index="item.id" :key="item.id">
        <el-sub-menu
          @click.stop="scrollToCate(item.id, index)"
          v-if="item.subCate"
          :index="item.id"
        >
          <template #title>
            <i class="menu-icon iconfont" :class="item.icon"></i>
            <span>
              {{ item.cateName }}
            </span>
          </template>
          <el-menu-item
            v-for="subItem in item.subCate"
            :index="subItem.id"
            @click="handleSubItemClick(item.id, subItem.id!)"
            >{{ subItem.cateName }}</el-menu-item
          >
        </el-sub-menu>
        <el-menu-item v-else @click="scrollToCate(item.id, index)">
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
import { cates } from "@/constant/cates";
import { useCategoryHook } from "@/utils/useCategoryHooks";

const emits = defineEmits<{
  (e: "handle-menu-change", clickID: string): void;
  (e: "handle-subItem-click", parentI: string, subItemId: string): void;
}>();
const $configStore = useConfigStore();
const { isCollapse } = storeToRefs($configStore);

/** 点击菜单,页面滚动 */
const scrollToCate = (id: string, index: number) => {
  emits("handle-menu-change", id);
  const scrollTopOffset =
    (document.getElementsByClassName("cate-name")[index] as any).offsetTop - 80;
  document
    .getElementsByClassName("el-scrollbar__wrap")[1]
    .scrollTo({ top: scrollTopOffset, behavior: "smooth" });
};

/**处理子菜单的点击,点击时tabbar也对应选中 */
const handleSubItemClick = (parentId: string, id: string) => {
  const { changeSubItemId } = useCategoryHook(parentId);
  changeSubItemId(id);
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
