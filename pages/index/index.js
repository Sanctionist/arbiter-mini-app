//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello userInfo!',
    length: -100,
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/pages/index/index'
    }
  },
  onPullDownRefresh: function(){
    console.log("find action for pull")
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        motto:"Hello " + userInfo.nickName + "!"
      })
    })
    wx.request({
      url: 'https://www.sancsun.com',
      success: function(res) {
        console.log(res.data)
      }
    })
  }
})
