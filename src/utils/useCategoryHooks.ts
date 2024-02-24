import { ref } from "vue";
import { cates } from "@/constant/cates";
import { catesT } from "@/constant/cates";

let catesMapper = ref();
export function useCategoryHook(parentId: string) {
  // 获取分类的大类
  const allCate = cates;

  // 获取大分类对应的子类id
  catesMapper.value = cates.reduce((prev: any, curr: any) => {
    prev[curr.id] = curr.subCate ? curr.subCate[0].id : "";
    return prev;
  }, {});

  // 获取大分类的列表
  async function getCateList() {
    const res = allCate.find((i: any) => i.id == parentId);
    return res || [];
  }

  // 获取子分类的列表
  async function getSubcateList() {
    const res = (await getCateList()) as catesT;
    if (res?.subCate) {
      return res?.subCate.filter(
        (i: any) => i.id == catesMapper.value[parentId]
      )[0];
    } else {
      return [];
    }
  }
  function changeSubItemId(newId: string) {
    catesMapper.value[parentId] = newId;
  }

  return {
    allCate,
    catesMapper,
    getCateList,
    getSubcateList,
    changeSubItemId,
  };
}
