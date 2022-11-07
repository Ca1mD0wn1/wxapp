// pages/home/components/proList/ProList.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail (event: WechatMiniprogram.BaseEvent) {
      console.log(event)
      const proid = event.target.dataset.proid

      wx.navigateTo({
        url: '/pages/detail/detail?proid=' + proid
      })
      // <navigator url="{{ '/pages/detail/detail?proid=' + proid}}" ></navigator>
    }
  }
})
