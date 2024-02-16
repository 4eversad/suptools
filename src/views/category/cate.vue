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
      @handle-tab-change="handleTabChange"
    ></cate-tab>
    <cate-items
      :active-tab-index="activeTabIndex"
      :cate-data="(cateData as subCatesListT)"
    ></cate-items>
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
const activeTabIndex = ref(0);
let cateData = reactive<never[] | subCatesListT>([]);
cateData = props.cate.subCate ? props.cate.subCate[0] : [];

const handleTabChange = (index: number) => {
  activeTabIndex.value = index;
  cateData = props.cate.subCate ? props.cate.subCate[activeTabIndex.value] : [];
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
