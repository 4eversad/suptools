<template>
  <div class="help" :style="{ width: isHidden ? '60px' : '200px' }">
    <ul class="help-list">
      <li v-for="i in helpData" class="help-item">
        <a href=""
          ><el-icon :size="18" class="help-icons"
            ><component :is="i.icon"
          /></el-icon>
          <span
            class="help-title"
            :style="
              isHidden ? { display: 'hidden' } : { display: 'inline-block' }
            "
            >{{ i.name }}</span
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import { storeToRefs } from "pinia";
import { helpData } from "./index.ts";
import { useConfigStore } from "@/store/index.ts";

const $configStore = useConfigStore();
const { isCollapse } = storeToRefs($configStore);
const isHidden = ref(false);
watch(
  () => isCollapse.value,
  (newVal) => {
    setTimeout(() => {
      // 展开
      isHidden.value = JSON.parse(newVal as string);
    }, 300);
  }
);

defineOptions({
  name: "Help",
});
</script>

<style scoped lang="less">
.help {
  box-sizing: border-box;
  background-color: #fff;
  font-size: 14px;
  .help-list {
    padding: 0;
  }
  .help-item {
    top: 0;
    left: 0;
    height: @help-height;
    line-height: @help-height;
    overflow: hidden;
    a {
      display: inline-block;
      width: 100%;

      .help-icons {
        vertical-align: text-bottom;
        margin-left: 22px;
        margin-right: 8px;
      }
      .help-title {
        transition: all 3s linear;
      }
    }
    a:hover {
      background-color: #e5e5e5;
      transition: all 0.3s linear;
    }
  }
}
</style>
