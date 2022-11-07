// pages/home/type.d.ts
export interface IBannerData {
  alt: string
  bannerid: string
  flag: boolean
  img: string
  link: string
}



export interface IProData {
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

export interface IHomeOption {
  data: {
    bannerList: IBannerData[],
    proList: IProData[]
  }
}

export interface IResData {
  data: {
    code: string
    // message: string
    data: any
  }
  statusCode: number
  header: Object
  cookies: string[]
  profile: Object
}