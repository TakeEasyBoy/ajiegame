Page({
  data: {
    imgUrls: [
      'https://static.jiaoyimao.com/resource/public/gnk/2019/2/28/a8a6f3d0-5c20-4966-863b-cf5e61e1080a.jpg',
      'https://static.jiaoyimao.com/resource/public/gnk/2019/2/28/1dcd0335-86e1-4b07-9934-ff157a093858.jpg',
      'https://static.jiaoyimao.com/resource/public/gnk/2019/3/1/31eefc62-0d5b-4277-aa35-356332688e4b.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})