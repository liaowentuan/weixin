var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    arr:[
      {title:'wenlai'}
    ],
    totalPage:""
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  searchShopping:function(e){
    let msg = e.detail.value
    let sort = 'bid'
    wx.request({
      url: 'https://s.m.taobao.com/search',
      data: {
        event_submit_do_new_search_auction: 1,
        _input_charset: 'utf-8',
        topSearch: '1',
        atype: 'c',
        searchfrom: '1',
       // action:'home:redirect_app_action',
        //from: '1',
        q: msg,
        sst: '1',
        n: '20',
        buying: 'buyitnow',
        m: 'api4h5',
        abtest: '21',
        wlsort: '21',
        page: '1',
        sort:sort
      },
      method: 'GET',
      success: function (res) {
        this.mySetData({
          arr: res.data.listItem,
          totalPage: res.data.totalPage
        })
      }.bind(this)
    })
  },
  home:function(){
    wx.switchTab({
      url:"/pages/index/index"
    })
  },
  mySetData:function(obj){
    this.setData(obj)
  }
})