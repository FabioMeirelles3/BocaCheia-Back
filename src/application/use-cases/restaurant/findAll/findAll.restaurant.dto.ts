export interface InputFindAllRestaurantDto {}

type Restaurant = {
  id: string
  name: string
  description: string
  phone: string
  address: string
  number: string
  complement: string
  district: string
  file: string
}

export interface OutputFindAllRestaurantDto {
  restaurants: Restaurant[]
}
