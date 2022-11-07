// utils/request.ts
// https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
// const request = {
// 	get () {},
// 	post () {}
// }
// request.get()
// request.post()
// 继承中间类型，data声明为any
interface AnyResult extends WechatMiniprogram.RequestSuccessCallbackResult {
  data: any
}
// 从中间类型继承一个泛型接口，data声明为泛型
export interface SpecResult<T> extends AnyResult {
  [x: string]: any
  data: T
}
// 声明业务数据类型
export interface IMyData {
  code: string
  msg: string
  data?: any
}

export default function request (config: WechatMiniprogram.RequestOption) {
	// 显示loading动画
	wx.showLoading({
		title: '加载中'
	})
	const { url = '', data = {}, method = 'GET', header = {}} = config
	// Promise<SpecResult<IMyData>> 声明resolve参数的数据类型
	return new Promise<SpecResult<IMyData>>((resolve, reject) => {
		wx.request({
			url: 'http://121.89.205.189:3000/api' + url,
			method,
			data,
			header,
			success: (res: SpecResult<IMyData>) => {
				resolve(res)
			},
			fail: () => {
				reject()
			},
			complete: () => {
				// 取消loading动画
				wx.hideLoading()
			}
		})
	})
}