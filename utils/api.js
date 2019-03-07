let API_HOST = "http://hah.com/api/"
export const API = function (data, api, method = 'get', header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: API_HOST + api,
      method: method ? method : 'get',
      data: data,
      header: header ? header : { "Content-type": "application/json" },
      success: function (res) {
        resolve(res)
      },
      fail: function () {
        resolve('error')
      }
    })
  })
}
