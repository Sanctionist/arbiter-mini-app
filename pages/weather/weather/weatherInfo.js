// pages/weather/weather/weatherInfo.js
Page({
  data:{
    reporttime:"default",
    city:"default",
    weather:"default",
    temperature:"default",
    winddirection:"default",
    windpower:"default",
    humidity:"default"
  },
  onLoad: function(option){
    console.log(option.value)
    var data = JSON.parse(option.value);
    var tmpLives = data.lives
    for(var i = 0, l = tmpLives.length; i < l; i++){
      this.setData({
        reporttime:tmpLives[i].reporttime,
        city:tmpLives[i].city,
        weather:tmpLives[i].weather,
        temperature:tmpLives[i].temperature,
        winddirection:tmpLives[i].winddirection,
        windpower:tmpLives[i].windpower,
        humidity:tmpLives[i].humidity
      });
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})