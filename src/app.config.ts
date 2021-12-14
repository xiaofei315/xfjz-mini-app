export default {
  pages: ['pages/home/home', 'pages/statistical/statistical'],
  tabBar: {
    custom: true,
    selectColor:'#0c9',
    list:[
      {
      pagePath:'pages/home/home'
    },
    {
      pagePath:'pages/statistical/statistical'
    }],
    usingComponents: {
      customtabbar: "custom-tab-bar/index"
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
}
