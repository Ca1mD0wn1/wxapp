import request from '../utils/request'

export function getProDetail (proid: string) {
	return request({
		url: '/pro/detail/' + proid
	})
}