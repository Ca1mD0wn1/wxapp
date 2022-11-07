// pages/detail.ts
import { getProDetail } from '../../api/detail'
import { IResData } from '../home/type'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proid: '',
    banners: [],
    proname: '',
    originprice: 0,
    current: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options:{proid:string}) {
    const proid = options.proid
    getProDetail(proid).then(res=>{
    const result = (res as IResData).data.data
    const banners = result.banners
    this.setData({
      proid,
      banners: banners[0].split(','),
      proname: result.proname,
      originprice: result.originprice
    })


    })
  },
  changeSwiper (event: { detail: { current: number } }) {
    this.setData({
      current: event.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  previewImage(){
    wx.previewImage({
      urls: this.data.banners,
      current: this.data.banners[this.data.current]
    })
  }
})