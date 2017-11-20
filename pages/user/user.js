const userData = {
  userName:'文团'
}
Page({

  /**
   * 页面的初始数据
   */
  data:userData
  ,
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: () => {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.vibrateLong({
      success: function (data) {
        console.log('haha')
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.vibrateLong({
      success: function (data) {
        console.log('hide')
      }
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("xialale")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('haoyou')
  }
})