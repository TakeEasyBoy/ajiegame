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
    duration: 1000,
    gridArrConfigs: [
      [
        { img: '/images/dixiacheng.jpg', name: '阿拉德之怒(阿拉德盟约)', page: '/pages/lists/lists' },
        { img: '/images/rongyao.jpg', name: '王者荣耀', page: '/pages/lists/lists' },
        { img: '/images/wulin.jpg', name: '武林外传手游', page: '/pages/lists/lists' },
        { img: '/images/meng.jpg', name: '梦幻西游', page: '/pages/lists/lists' },
      ],
      [
        { img: '/images/chuanqi.jpg', name: '热血传奇安卓版', page: '/pages/lists/lists' },
        { img: '/images/yinyang.gif', name: '阴阳师', page: '/pages/lists/lists' },
        { img: '/images/dahua.gif', name: '大话西游', page: '/pages/lists/lists' },
        { img: '/images/shikong.jpg', name: '时空猎人', page: '/pages/lists/lists' }
      ],
    ]
  },
  // banner跳转函数
  jumpToUrl: function(e) {
    var url = e.currentTarget.dataset.url
    console.log(url)
  },
  // 跳转页面
  jumptoPage: function(e) {
    var page = e.currentTarget.dataset.page
    console.log(page)
    wx.switchTab({
      url: page,
    })
  }
})
