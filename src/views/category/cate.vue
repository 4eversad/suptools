<template>
  <div class="cate">
    <div class="cate-name">
      {{ cate.cateName }}
      <i class="iconfont cate-name--icon" :class="cate.icon"></i>
    </div>
    <cate-tab
      ref="cateTabRef"
      v-if="cate.subCate"
      :parent-id="cate.id"
      :cates-list="cate.subCate"
      @handle-tab-change="handleTabChange"
    ></cate-tab>
    <cate-items
      :cate-data="(cateData as subCatesListT)"
      :parent-id="cate.id"
    ></cate-items>
  </div>
</template>

<script setup lang="ts">
import cateTab from "./components/cateTab.vue";
import cateItems from "./components/cateItems.vue";
import { ref } from "vue";
import type { subCatesListT } from "@/constant/cates";
import { useCategoryHook } from "@/utils/useCategoryHooks";

const props = defineProps({
  cate: {
    type: Object,
    default: {},
    required: true,
  },
});

const { getSubcateList } = useCategoryHook(props.cate.id);

// tab初始默认id
let cateData = ref<never[] | subCatesListT>([]);
cateData.value = (await getSubcateList()) ?? [];

async function handleTabChange() {
  cateData.value = (await getSubcateList()) || [];
  console.log(cateData.value);
}

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
