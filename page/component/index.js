var common = require('common.js')
Page({
  data:{
  },
  onLoad:function(options){
      var localValue = 'local'
      var app = getApp()
      app.globalData++
  },
  toScroll :function(){
    wx.navigateTo({
      url:'scroll/scrollView'
    })
  },
  toSwiper: function(){
    wx.navigateTo({
      url:"swiper/swiper"
    })
  },

  toIcon: function(){
    wx.navigateTo({
      url:"icon/icon"
    })
  },

  toText: function(){
    wx.navigateTo({
      url:"text/text"
    })
  },
  
  toProgress: function(){
    wx.navigateTo({
      url:"progress/progress"
    })
  },

  toButton: function(){
    wx.navigateTo({
      url:"button/button"
    })
  },

  hello: function(){
    common.sayHello('MANI')
  }  
})
