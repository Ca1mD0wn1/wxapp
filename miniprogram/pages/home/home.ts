import { getBannerList, getProList } from '../../api/home'
import navList from '../../utils/nav'
// pages/home/home.ts

export interface IBannerItem {
  alt: string
  bannerid: string
  flag: boolean
  img: string
  link: string
}
export interface INavItem {
  navid: number
  title: string
  imgurl: string
}
export interface IPro {
  banners: string[]
  brand: string
  category: string
  desc: string
  discount: number
  img1: string
  img2: string
  img3: string
  img4: string
  isrecommend: number
  issale: number
  isseckill: number
  originprice: number
  proid: string
  proname: string
  sales: number
  stock: number
}
interface IData {
  data: {
    proList: IPro[]
    navList: INavItem[]
    bannerList: IBannerItem[]
    count: number
  }
}
Page<IData,any>({

  /**
   * 页面的初始数据
   */
  data: {
    
    bannerList:[],
    navList: navList,
    proList: [],
    count: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    getBannerList().then(res=>{
      this.setData({
        bannerList:res.data.data
      })
    })

    getProList().then((res) => {
      this.setData({
        proList: res.data.data
      })
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
    getProList().then((res) => {
      this.setData({
        proList: res.data.data,
        count: 2
      })
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    getProList({ count: this.data.count }).then(res => {
      if (res.data.data.length === 0) {
        console.log('没有更多数据了')
        wx.showToast({
          title: '没有更多数据了',
          icon: 'none'
        })
      } else {
        this.setData({
          proList: [...this.data.proList, ...res.data.data],
          count: this.data.count + 1
        })
      }
    })
  },
  backTop () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500
    })
  },

  onPageScroll ({ scrollTop }: { scrollTop: number }) {
    this.setData({
      scrollTop
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
})