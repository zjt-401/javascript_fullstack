// pages/singerDetail/singerDetail.js
const baseUrl = 'http://localhost:3000'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singerInfo: {},
    singerSongs: [],
    singerAlbums: []
  },
 
  /* 获取歌手单曲 */
  getSingerSongs (id) {
    let that = this
    wx.request({
      url: baseUrl + '/artists',
      data: {
        id: id
      },
      success (res) {
        if (res.data.code == 200) {
          console.log(res.data)
          that.setData({
            singerSongs: res.data.hotSongs,
            singerInfo: res.data.artist
          })
          wx.setNavigationBarTitle({
            title: that.data.singerInfo.name //页面标题为路由参数
         })
        }
      }
    })
  },
  /* 获取歌手专辑 */
  getSingeralbum (id) {
    let that = this
    wx.request({
      url: baseUrl + '/artist/album',
      data: {
        id: id,
        limit: 50
      },
      success (res) {
        if (res.data.code == 200) {
          console.log(res.data.hotAlbums)
          res.data.hotAlbums.forEach((item) => {
            item.publishTime = that.timestampToTime(item.publishTime)
          })
          that.setData({
            singerAlbums: res.data.hotAlbums
          })
        }
      }
    })
  },
  /* 格式化时间戳 */
  timestampToTime (timestamp) {
    let date = new Date(timestamp)//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let  Y = date.getFullYear() + '-'
    let  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth() + 1) + '-'
    let  D = date.getDate() + ' '
    let  h = date.getHours() + ':'
    let  m = date.getMinutes() + ':'
    let  s = date.getSeconds()
    return Y + M + D
},
  /* 播放歌曲 */
  play(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../play/play?id=' + id
    })
  },
  /* 查看歌单详情 */
  songSheetDetail(e) {
    console.log(e.currentTarget.dataset.id)
    let albumId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../songSheetDetail/songSheetDeatil?albumId=' + albumId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    this.getSingerSongs(options.id)
    this.getSingeralbum(options.id)
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