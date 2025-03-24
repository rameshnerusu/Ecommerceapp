export interface IProduct {
    productId: number
    productName: string
    shortName: string
    category: string
    sku: string
    price: number
    thumbnailImageUrl: any
    deliveryTimeSpan: any
  }

  export interface Product {
    productId: number
    productName: string
    shortName: string
    category: string
    sku: string
    price: number
    thumbnailImageUrl: string
    deliveryTimeSpan: string
  }