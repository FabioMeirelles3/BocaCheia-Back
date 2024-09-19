export interface InputFindRestaurantMenuDto {
  restaurantId: string
}

type Menu = {
  id: string
  name: string
  description: string
  price: number
  file: string
  restaurantId: string
}

export interface OutputFindRestaurantMenuDto {
  menus: Menu[]
}
