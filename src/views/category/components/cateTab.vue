<template>
  <div class="tab-bar">
    <ul class="cate-list">
      <li
        class="cate-item"
        :class="{ active: item.id === catesMapper[parentId] }"
        v-for="item in catesList"
        @click="changeTab(item.id!)"
      >
        {{ item.cateName }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { subCatesListT } from "@/constant/cates";
import { useCategoryHook } from "@/utils/useCategoryHooks";

const props = defineProps<{
  catesList: subCatesListT[];
  parentId: string;
}>();
const { catesMapper } = useCategoryHook(props.parentId);

const emits = defineEmits<{
  (e: "handleTabChange"): void;
}>();
const changeTab = (id: string) => {
  const { changeSubItemId } = useCategoryHook(props.parentId);
  changeSubItemId(id);
};
defineOptions({
  name: "CateTab",
});
</script>

<style scoped lang="less">
.tab-bar {
  display: flex;
}
.cate-list {
  position: relative;
  flex-direction: row;
  background-color: #eeeef3;
  padding: 4px 6px;
  text-align: center;
  vertical-align: middle;
  border-radius: 30px;
  .cate-item {
    font-family: Poppins, sans-serif;
    user-select: none;
    font-size: 14px;
    display: inline-block;
    text-align: center;
    justify-content: center;
    box-sizing: border-box;
    margin-right: 8px;
    padding: 7px 14px;
    cursor: pointer;
    border-radius: 20px;
    color: #78798e;
    &.active {
      background-color: #fff;
      transition: all 0.3s linear;
      color: #202142;
    }
  }

  .cate-item:last-child {
    margin-right: 0;
  }
}
</style>
