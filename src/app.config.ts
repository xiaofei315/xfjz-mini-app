export default {
  pages: ["pages/index/index",'pages/statistical/index'],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: 'pages/statistical/index',
        text: '统计',
      },
      // {
      //   pagePath: 'pages/footmark/index',
      //   text: '足迹',
      // },
      // {
      //   pagePath: 'pages/center/index',
      //   text: '我的',
      // },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
