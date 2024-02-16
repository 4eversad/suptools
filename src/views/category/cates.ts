export interface catesT {
  cateName: string;
  icon: string;
  url?: string;
  id: string;
  subCate?: subCatesListT[];
}
export interface subCatesListT {
  cateName: string;
  id?: string;
  cateContent: subCatesT[];
}
export interface subCatesT {
  title: string;
  logo: string;
  description: string;
}

export const cates: catesT[] = [
  {
    cateName: "AI工具",
    icon: "icon-a-bianzu46",
    id: "1",
    subCate: [
      {
        cateName: "ai翻译",
        id: "111",
        cateContent: [
          {
            title: "讯飞对对dddd对",
            logo: "https://img2.baidu.com/it/u=2155400544,2100977703&fm=253&fmt=auto&app=138&f=JPEG?w=475&h=500",
            description: "描述描少时诵诗书少时诵诗书飒飒飒述描述",
          },
          {
            title: "讯飞翻译2",
            logo: "https://p8.itc.cn/q_70/images03/20210423/8a3b0fec492d4d9db84f69a7b2ccddad.png",
            description: "描述描述描述2",
          },
        ],
      },
      {
        cateName: "aixx",
        id: "112",
        cateContent: [
          {
            title: "讯飞翻译",
            logo: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8d0d3b41-c5e9-482b-b9f4-a722d3722b79%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1710525216&t=329cbb24c7afcee67cbfcceea309999a",
            description: "描述描述描述",
          },
          { title: "讯飞翻译2", logo: "", description: "描述描述描述2" },
        ],
      },
      {
        cateName: "aiwedadsf",
        id: "113",

        cateContent: [
          {
            title: "ddddddddd标题的点点滴滴",
            logo: "",
            description:
              "描述描的点点滴滴多多多多多多多多多多多多多多多多述描述",
          },
          { title: "讯飞翻译2", logo: "", description: "描述描述描述2" },
        ],
      },
      {
        cateName: "ai图片",
        id: "114",

        cateContent: [
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
          { title: "图片xxx", logo: "", description: "描述描述描述" },
        ],
      },
    ],
  },
  {
    cateName: "影视视频",
    icon: "icon-yingshiguankan",
    id: "2",
    subCate: [
      {
        id: "211",
        cateName: "ai翻译",
        cateContent: [
          { title: "讯飞翻译", logo: "", description: "描述描述描述" },
        ],
      },
      {
        id: "212",
        cateName: "ai图片",
        cateContent: [
          { title: "图片xxx", logo: "", description: "描述描述描述" },
        ],
      },
    ],
  },
  {
    cateName: "图书音乐",
    icon: "icon-icon-test",
    id: "3",
    subCate: [
      {
        cateName: "ai翻译3",
        id: "311",

        cateContent: [
          { title: "讯飞翻译", logo: "", description: "描述描述描述" },
        ],
      },
      {
        cateName: "ai图片",
        id: "312",
        cateContent: [
          { title: "图片xxx", logo: "", description: "描述描述描述" },
        ],
      },
    ],
  },
  {
    cateName: "资源搜索",
    icon: "icon-ziyuansousuo3",
    id: "4",
  },
  // {
  //   cateName: "实用工具",
  //   icon: "icon-gongju",
  //   id: "5",
  // },
  // {
  //   cateName: "软件应用",
  //   icon: "icon-yingyong4",
  //   id: "6",
  // },
  // {
  //   cateName: "设计素材",
  //   icon: "icon-sucai3",
  //   id: "7",
  // },
];
