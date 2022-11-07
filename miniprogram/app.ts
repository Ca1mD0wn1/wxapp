// app.ts
App<IAppOption>({
  globalData: { 
    statusBarHeight: 20,
    pixelRatio: 1
  },
  onLaunch() {
    //获取设备信息
    const res = wx.getSystemInfoSync()
    this.globalData.statusBarHeight = res.statusBarHeight
    this.globalData.pixelRatio = res.pixelRatio
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})