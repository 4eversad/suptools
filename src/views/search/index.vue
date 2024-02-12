<template>
  <div class="page-search">
    <div class="search-area">
      <input
        v-model.trim="searchContent"
        placeholder="站内搜索"
        class="search-input"
      />
      <div class="search-icon" @click="submit">
        <el-icon><Search /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const searchContent = ref<string>("");
const submit = () => {};

defineOptions({
  name: "headerSearch",
});
</script>

<style scoped lang="less">
.page-search {
  margin-top: -(@nav-height);
  height: 400px;
  background-color: rgba(241, 182, 173, 0.852);
  width: 100%;
  overflow: hidden;
  .search-area {
    width: 400px;
    height: 40px;
    margin: 150px auto;
    position: relative;
    .search-input {
      display: block;
      outline: none;
      padding: 5px 16px;
      font-size: 16px;
      box-sizing: border-box;
      width: 400px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 40px;
      background-color: lemonchiffon;
    }
    .search-icon {
      position: absolute;
      top: 8px;
      font-size: 20px;
      right: 12px;
      width: 20px;
      cursor: pointer;
    }
  }
}
</style>
