<template>
  <ul class="sub-cate-list">
    <template v-if="cateData.cateContent">
      <li class="sub-cate-item" v-for="item in cateData?.cateContent">
        <a href="">
          <div class="logo">
            <img :src="item.logo ? item.logo : ''" />
          </div>
          <div class="sub-cate--right">
            <div class="sub-cate--title">
              {{ item.title }}
            </div>
            <div class="sub-cate--description">
              {{ item.description }}
            </div>
          </div></a
        >
      </li>
    </template>
    <template v-else> <div class="no-data">暂无资源...</div></template>
  </ul>
</template>

<script setup lang="ts">
import { watch } from "vue";
import type { subCatesListT } from "../cates";

const props = defineProps<{
  cateData: subCatesListT;
}>();
watch(
  () => props.cateData,
  () => {
    console.log(1231);
  }
);
defineOptions({
  name: "CateName",
});
</script>

<style lang="less" scoped>
.sub-cate-list {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .sub-cate-item {
    box-sizing: content-box;
    cursor: pointer;
    width: 200px;
    height: 130px;
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 16px;
    border: 1px solid transparent;
    transition: all 0.2s linear;
    a {
      display: flex;
      align-items: start;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
    }

    .logo {
      margin-top: 28px;
      width: 56px;
      height: 56px;
      border-radius: 60px;
      border: 1px solid #eee;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transform: scale(1);
      }
    }
    .sub-cate--right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .sub-cate--title {
        margin-top: 36px;
        width: 110px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
      }
      .sub-cate--description {
        margin-top: 10px;
        width: 110px;
        font-size: 12px;
        color: #747474;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .sub-cate-item:hover {
    border: 1px solid #c1c1c1;
    box-shadow: 0 6px 21px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-2%);
    transition: all 0.2s linear;
  }
}
.no-data {
  color: #747474;
  font-size: 12 px;
}
</style>
