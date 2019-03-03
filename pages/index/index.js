//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://static.jiaoyimao.com/resource/public/gnk/2019/2/28/a8a6f3d0-5c20-4966-863b-cf5e61e1080a.jpg',
      'https://static.jiaoyimao.com/resource/public/gnk/2019/2/28/1dcd0335-86e1-4b07-9934-ff157a093858.jpg',
      'https://static.jiaoyimao.com/resource/public/gnk/2019/3/1/31eefc62-0d5b-4277-aa35-356332688e4b.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  // banner跳转函数
  jumpToUrl: function(e) {
    var url = e.currentTarget.dataset.url
    console.log(url)
  }
})
