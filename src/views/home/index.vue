<template>
  <div class="home-page">
    <div class="home-page--left">
      <sidebar></sidebar>
    </div>
    <div class="home-page--right">
      <pageMain></pageMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import sidebar from "@/views/sidebar/index.vue";
import pageMain from "@/views/main/index.vue";
</script>

<style scoped lang="less">
.home-page {
  display: flex;
  height: 100vh;
}

.home-page--right {
  background-color: @light-themeColor;
  flex: 1;
}
</style>
