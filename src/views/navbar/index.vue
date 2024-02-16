<template>
  <div
    class="nav-bar"
    :style="
      props.scrollTop > 76
        ? { backgroundColor: '#fff' }
        : { backgroundColor: 'transparent' }
    "
  >
    <div class="nav-bar--header">
      <div class="header--left">
        <div class="collapse-icon" @click="$configStore.toggleSidebar">
          <template v-if="JSON.parse(isCollapse as string)">
            <i class="iconfont icon-toggle-right"> </i>
          </template>
          <template v-else>
            <i class="iconfont icon-toggle-left"></i>
          </template>
        </div>
      </div>
      <div class="header--right">
        <div class="nav-collect">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="收藏"
            placement="bottom"
          >
            <el-icon><Star /></el-icon>
          </el-tooltip>
        </div>
        <div class="nav-theme" @click="toggleDark()">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="isDark ? '白天模式' : '黑夜模式'"
            placement="bottom"
          >
            <el-icon><component :is="!isDark ? Moon : Sunny" /></el-icon>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Star, Sunny, Moon } from "@element-plus/icons-vue";
import { useConfigStore } from "@/store";
import { useDark, useToggle } from "@vueuse/core";
import { storeToRefs } from "pinia";

const isDark = useDark();
const $configStore = useConfigStore();
const { isCollapse } = storeToRefs($configStore);
const toggleDark = useToggle(isDark) as any;
const props = defineProps({
  scrollTop: {
    type: Number,
    default: 0,
  },
});

defineOptions({
  name: "NavBar",
});
</script>
<style lang="less">
.nav-bar {
  // color: #fff;
  background-color: transparent;
  position: sticky;
  transition: all 0.2s linear;
  top: 0px;
  box-sizing: border-box;
  height: @nav-height;
  z-index: 9;
}
.nav-bar--header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  text-align: center;
  line-height: @nav-height;
  .header--left {
    height: 100%;
    .collapse-icon {
      width: 40px;
      cursor: pointer;
      .icon-toggle-right,
      .icon-toggle-left {
        font-size: 20px;
      }
    }
  }
  .header--right {
    display: flex;
    margin-right: 50px;
    .nav-collect {
      width: 40px;
      margin-right: 20px;
      font-size: 20px;
      cursor: pointer;
      vertical-align: baseline;
      z-index: 999;
    }
    .nav-theme {
      width: 40px;
      z-index: 999;
      vertical-align: middle;
      cursor: pointer;
      font-size: 18px;
    }
  }
}
</style>
