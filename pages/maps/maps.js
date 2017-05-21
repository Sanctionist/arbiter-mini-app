// pages/maps/maps.js
Page({
  data: {
    longitude: 114,
    latitude: 22,
    markers: []
  },
  onLoad:function(){
    /**wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })**/
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude)
        console.log(longitude)
        var speed = res.speed
        var accuracy = res.accuracy

        var markers = [{
          id: 0,
          latitude: latitude,
          longitude: longitude,
          width: 50,
          height: 50
        }]

        that.setData({
          longitude: longitude,
          latitude: latitude,
          markers: markers
        })
      }
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  }
})