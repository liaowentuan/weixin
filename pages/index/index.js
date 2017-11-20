const helloData = {
  name: 'WeChat',
  age:15,
  latitude:'',
  longitude:'',
  getLocation:'',
  show:""
}
// Register a Page.
Page({
  data: helloData,
  changeName: function (e) {
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  },
  onLoad:()=>{
    wx.setNavigationBarTitle({ //更改页面标题
      'title': '首页'
    })
  },
  onShow:function(){ 
    this.setData({
      show: 1
    })
  },
  close: function(e){
    console.log(e)
    this.setData({
      show: 0
    })
  },
  showShop:function(){
    wx.navigateTo({
      url: '../../pages/detail/detail',
    })
  }
})