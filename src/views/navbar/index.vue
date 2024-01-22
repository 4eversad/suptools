<template>
  <el-page-header>
    <template #content>
      <template v-if="!$configStore.isCollapse">
        <el-icon @click="$configStore.toggleSidebar"><Expand /></el-icon>
      </template>
      <template v-else>
        <el-icon @click="$configStore.toggleSidebar"><Fold /></el-icon>
      </template>
    </template>
  </el-page-header>
</template>
import { useConfigStore } from '@/store';

<script lang="ts" setup>
import { useConfigStore } from "@/store";
import { Expand, Fold } from "@element-plus/icons-vue";

const $configStore = useConfigStore();
</script>
