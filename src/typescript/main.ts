export interface Product {
  title: string,
  weight: number,
  price: number,
  type: string,
  promo: boolean,
  ingredients: IngredientsForProduct[]
}
interface IngredientsForProduct {
  ingredTitle: string,
  ingredQuantity: number
}
export interface Order {
  name: string,
  phone: string,
  orderList: IngredientsForProduct[]
}
export interface Filial {
  filialTitle: string,
  lat: number,
  lon: number,
  phone: string,
  adress: string,
  email: string
}