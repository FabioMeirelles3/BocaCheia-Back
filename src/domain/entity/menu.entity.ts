import { Restaurant } from './restaurant.entity'

export class Menu {
  private _id: string
  private _name: string
  private _description: string
  private _price: number
  private _file: string
  private _restaurant: Restaurant
  private _active: boolean = true

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    file: string,
    restaurant: Restaurant,
  ) {
    this._id = id
    this._name = name
    this._description = description
    this._price = price
    this._file = file
    this._restaurant = restaurant
    this.validate()
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get description() {
    return this._description
  }

  get price() {
    return this._price
  }

  get file() {
    return this._file
  }

  get restaurant() {
    return this._restaurant
  }

  changeName(name: string) {
    this._name = name
    this.validate()
  }

  changeDescription(description: string) {
    this._description = description
    this.validate()
  }

  alterPrice(price: number) {
    this._price = price
    this.validate()
  }

  changeFile(file: string) {
    this._file = file
    this.validate()
  }

  isActive(): boolean {
    return this._active
  }

  activate() {
    this._active = true
  }

  deactivate() {
    this._active = false
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error('Id is required')
    }
    if (this._name.length === 0) {
      throw new Error('Name is required')
    }
    if (this._description.length === 0) {
      throw new Error('Description is required')
    }
    if (this._price <= 0) {
      throw new Error('Price must be greater than zero')
    }
    if (this._file.length === 0) {
      throw new Error('File is required')
    }
    if (!this._restaurant) {
      throw new Error('Restaurant is required')
    }
  }
}
