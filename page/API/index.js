Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
      var localValue = 'local'
      var data = getApp().globalData
      console.log('globalData:' + data)
      getApp().globalData++
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
