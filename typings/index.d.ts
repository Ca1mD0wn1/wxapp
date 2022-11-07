/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    statusBarHeight: number,
    pixelRatio: number,
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}