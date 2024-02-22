<template>
  <div class="cate">
    <div class="cate-name">
      {{ cate.cateName }}
      <i class="iconfont cate-name--icon" :class="cate.icon"></i>
    </div>
    <cate-tab
      ref="cateTabRef"
      v-if="cate.subCate"
      :cates-list="cate.subCate"
      :tabId="activeTabId"
      @handle-tab-change="handleTabChange"
    ></cate-tab>
    <cate-items :cate-data="(cateData as subCatesListT)"></cate-items>
  </div>
</template>

<script setup lang="ts">
import cateTab from "./components/cateTab.vue";
import cateItems from "./components/cateItems.vue";
import { ref, reactive } from "vue";
import type { subCatesListT } from "./cates";

const props = defineProps({
  cate: {
    type: Object,
    default: "",
    required: true,
  },
});
// tab初始默认id
const activeTabId = ref(props.cate.subCate ? props.cate.subCate[0].id : "");

let cateData = reactive<never[] | subCatesListT>([]);
cateData = props.cate.subCate
  ? props.cate.subCate.find((i: subCatesListT) => i.id == activeTabId.value)
  : [];

const handleTabChange = (id: string) => {
  activeTabId.value = id;
  cateData = props.cate.subCate
    ? props.cate.subCate.find((i: any) => i.id === activeTabId.value)
    : [];
  console.log(cateData);
};
defineOptions({
  name: "Cate",
});
</script>

<style lang="less" scoped>
.cate {
  padding: 20px 30px;

  .cate-name--icon {
    vertical-align: middle;
    display: inline-block;
    font-size: 24px;
    margin-left: 2px;
  }
}
</style>
