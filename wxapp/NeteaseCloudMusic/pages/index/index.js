// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: 1,
    banners: ''
  },
  // 点击切换页面
  switchNav (e) {
    // console.log(e.target.dataset.id)
    this.setData({
      currentId: e.target.dataset.id
    })
  },
  // 滑动切换页面
  scollNav (e) {
    // console.log(e.detail.current)
    this.setData({
      currentId: e.detail.current
    })
  },
  // 轮播图
  getBanner () {
    let that = this
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/banner',
      success (res) {
        // console.log(res.data.banners)
        that.setData({
          banners: res.data.banners
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner()
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

  }
})