// api/home.ts
import request from '../utils/request'
interface IProParams {
	limitNum?: number
	count?: number
}
export function getBannerList () {
	return  request({
		url: '/banner/list'
	})
}

export function getProList (params?: IProParams) {
	return  request({
		url: '/pro/list',
		data: params
	})
}