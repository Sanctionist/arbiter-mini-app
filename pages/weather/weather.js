Page({
  data: {
    focus: false,
    inputValue: '请输入地区名称',
    locData:[]
  },
  bindblur:function(e){
      if(e.detail.value != ""){
        var that = this
        wx.request({
            url: 'https://www.sancsun.com/city?city=' + e.detail.value,
            success: function(res) {
                console.log(res.data)
                var tmpData = res.data.data;
                var tmpLocData = []
                for(var i = 0, l = tmpData.length; i < l; i++){
                    console.log(res.data.data[i].name)
                    tmpLocData.push(res.data.data[i].name)
                }
                that.setData({
                    locData:tmpLocData
                })
            }
        })
      }
  },
  bindinput:function(e){
    this.setData({
        locData:[]
    })
  },
  bindconfirm:function(e){
    if(e.detail.value != ""){
        var that = this
        wx.request({
            url: 'https://www.sancsun.com/city?city=' + e.detail.value,
            success: function(res) {
                console.log(res.data)
                var tmpData = res.data.data;
                var tmpLocData = []
                for(var i = 0, l = tmpData.length; i < l; i++){
                    console.log(res.data.data[i].name)
                    tmpLocData.push(res.data.data[i].name)
                }
                that.setData({
                    locData:tmpLocData
                })
            }
        })
      }
  },
  getWeather:function(e){
      console.log("do getWeather");
      console.log(e.currentTarget.dataset.text)
      wx.request({
            url: 'https://www.sancsun.com/weather?city=' + e.currentTarget.dataset.text + '&type=base',
            success: function(res) {
                console.log(res.data)
                wx.navigateTo({
                  url: './weather/weatherInfo?value=' + JSON.stringify(res.data),
                  success: function(res){
                    // success
                  },
                  fail: function(res) {
                    // fail
                  },
                  complete: function(res) {
                    // complete
                  }
                })
            }
        })
  },
  get_cur_loc: function (){
    var latitude = '116.310003';
    var longitude = '39.991957';
    var that = this;

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.latitude = res.latitude
        that.longitude = res.longitude
        console.log("latitude:" + that.latitude + " longitude:" + that.longitude);

        wx.request({
          url: 'https://www.sancsun.com/location?latitude=' + that.latitude + '&longitude=' + that.longitude,
          success: function (res) {
            console.log(res.data.adcode)
            //更新数据
            that.setData({
              inputValue: res.data.adcode
            }),
            wx.request({
              url: 'https://www.sancsun.com/city?city=' + res.data.adcode,
              success: function (resWeather) {
                console.log(resWeather.data)
                var tmpData = resWeather.data.data;
                var tmpLocData = []
                for (var i = 0, l = tmpData.length; i < l; i++) {
                  console.log(resWeather.data.data[i].name)
                  tmpLocData.push(resWeather.data.data[i].name)
                }
                that.setData({
                  locData: tmpLocData
                })
              }
            })
          }
        })
      }
    })
  }
})