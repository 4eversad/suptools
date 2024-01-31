<template>
  <el-page-header>
    <template #icon>
      <template v-if="$configStore.isCollapse">
        <i
          class="iconfont icon-toggle-right"
          @click="$configStore.toggleSidebar"
        >
        </i>
      </template>
      <template v-else>
        <i
          class="iconfont icon-toggle-left"
          @click="$configStore.toggleSidebar"
        ></i>
      </template>
    </template>
    <template #extra>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="收藏"
        placement="bottom"
      >
        <i class="iconfont icon-shoucang1 shoucang"></i>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="isDark ? '白天模式' : '黑夜模式'"
        placement="bottom"
      >
        <i
          class="iconfont toggleTheme"
          :class="!isDark ? 'icon-heiye' : 'icon-baitian'"
          @click="toggleDark()"
        ></i>
      </el-tooltip>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useConfigStore } from "@/store";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark) as any;
const $configStore = useConfigStore();
</script>
<style lang="less">
.el-page-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  width: 100%;
  height: @nav-height;
  border-bottom: 1px solid #eee;
  background-color: @light-themeColor;
  box-shadow: 0px 17px 42px -16px #f3d7be;
  z-index: 9;
}
.el-page-header .el-page-header__header {
  height: 100%;
  z-index: 9;

  .el-page-header__back {
    margin-left: 16px;
  }
  .el-page-header__title {
    display: none;
  }
  .el-page-header__extra {
    .shoucang {
      vertical-align: middle;
      font-weight: bold;
      margin-right: 20px;
      font-size: 20px;
      cursor: pointer;
    }
    .toggleTheme {
      vertical-align: middle;
      cursor: pointer;
      font-size: 18px;
    }
    margin-right: 50px;
  }
  .icon-toggle-right,
  .icon-toggle-left {
    font-size: 20px;
  }
  .el-divider {
    margin: 0 8px;
  }
}
</style>
