const mapData = {

}

Page({

  /**
   * 页面的初始数据
   */
  data:mapData,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.data.getLocation = res
        console.log(this.data.getLocation)
      },
      fail: function (data) {
        console.log(data)
      },
      complete:()=>{
        console.log('无论失败与否，都能执行')
        wx.openLocation({
          latitude: this.data.getLocation.latitude,
          longitude: this.data.getLocation.longitude
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.navigateBack({
      delta: 1  // 页面返回
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: ()=>{
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom:  ()=> {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})