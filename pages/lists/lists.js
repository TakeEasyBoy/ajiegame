Page({
  data: {
    lists: [
    ]
  },
  onLoad: function() {
    // 
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(() => {
      wx.hideLoading()
      this.setData({
        lists: [
          {
            "id": "10258913251",
            "type": "账",
            "icon": "zhanghao",
            "title": "【60级】天空鬼三粉宠低价处理",
            "creditLevel": 2,
            "dealRate": '70%',
            "accountType": "oppo账号",
            "serverArea": "冰封雪域49服",
            "price": "1,325",
            "isInsure": false,
          },
          {
            "id": "10258913252",
            "type": "币",
            "icon": "bi",
            "title": "【60级】挥泪斩阵鬼啦",
            "creditLevel": -1,
            "dealRate": '90%',
            "accountType": "上士账号",
            "serverArea": "冰封雪域48服",
            "price": "288",
            "isInsure": false,
          },
          {
            "id": "10258913253",
            "type": "账",
            "icon": "zhanghao",
            "title": "【60级】天空鬼三粉宠低价处理",
            "creditLevel": 2,
            "dealRate": '50%',
            "accountType": "oppo账号",
            "serverArea": "冰封雪域49服",
            "price": "1,325",
            "isInsure": false,
          } 
        ]
      })
    }, 2000)
  },
  gotoDetail: function(e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`,
    })
  },
  onPullDownRefresh: function() {
    const data = this.data.lists
    const item = {
      id: 102589132,
      "type": "币",
      "icon": "bi",
      "title": "【60级】天空鬼三粉宠低价处理",
      "creditLevel": 2,
      "dealRate": '70%',
      "accountType": "oppo账号",
      "serverArea": "冰封雪域49服",
      "price": "1,325",
      "isInsure": false,
    }
    item.id++
    data.push(item)
    this.setData({
      lists: data
    }, wx.stopPullDownRefresh())
  }
})