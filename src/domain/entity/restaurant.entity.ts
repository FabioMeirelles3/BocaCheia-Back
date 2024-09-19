export class Restaurant {
  private _id: string
  private _name: string
  private _description: string
  private _phone: string
  private _address: string
  private _number: string
  private _complement: string
  private _district: string
  private _file: string
  private _active: boolean = true

  constructor(
    id: string,
    name: string,
    description: string,
    phone: string,
    address: string,
    number: string,
    complement: string,
    district: string,
    file: string,
  ) {
    this._id = id
    this._name = name
    this._description = description
    this._phone = phone
    this._address = address
    this._number = number
    this._complement = complement
    this._district = district
    this._file = file
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

  get phone() {
    return this._phone
  }

  get address() {
    return this._address
  }

  get number() {
    return this._number
  }

  get complement() {
    return this._complement
  }

  get district() {
    return this._district
  }

  get file() {
    return this._file
  }

  changeName(name: string) {
    this._name = name
    this.validate()
  }

  changeDescription(description: string) {
    this._description = description
    this.validate()
  }

  changePhone(phone: string) {
    this._phone = phone
    this.validate()
  }

  changeAddress(address: string) {
    this._address = address
    this.validate()
  }

  changeNumber(number: string) {
    this._number = number
    this.validate()
  }

  changeComplement(complement: string) {
    this._complement = complement
  }

  changeDistrict(district: string) {
    this._district = district
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
    if (this._phone.length === 0) {
      throw new Error('Phone is required')
    }
    if (this._address.length === 0) {
      throw new Error('Address is required')
    }
    if (this._number.length === 0) {
      throw new Error('Number is required')
    }
    if (this._district.length === 0) {
      throw new Error('District is required')
    }
    if (this._file.length === 0) {
      throw new Error('File is required')
    }
  }
}
