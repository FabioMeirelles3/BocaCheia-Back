export interface InputFindAllMenuDto {}

type Menu = {
  id: string
  name: string
  description: string
  price: number
  file: string
  restaurantId: string
}

export interface OutputFindAllMenuDto {
  menus: Menu[]
}
