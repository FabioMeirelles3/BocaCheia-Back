import { Menu } from './menu.entity'
import { Restaurant } from './restaurant.entity'

describe('Menu tests', () => {
  let restaurant
  beforeAll(() => {
    restaurant = new Restaurant(
      'ID Test',
      'Name Test',
      'Description Test',
      'Phone Test',
      'address Test',
      'number Test',
      'complement Teste',
      'district Test',
      'file Test',
    )
  })
  it('should throw error when id is empty', () => {
    expect(() => {
      new Menu(
        '',
        'Name Test',
        'Description Test',
        99.99,
        'File test',
        restaurant,
      )
    }).toThrow('Id is required')
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      new Menu(
        'Id Test',
        '',
        'Description Test',
        99.99,
        'File test',
        restaurant,
      )
    }).toThrow('Name is required')
  })

  it('should throw error when Description is empty', () => {
    expect(() => {
      new Menu('Id Test', 'Name Test', '', 99.99, 'File test', restaurant)
    }).toThrow('Description is required')
  })
  it('should throw error when Price is empty', () => {
    expect(() => {
      new Menu(
        'Id Test',
        'Name Test',
        'Description Test',
        null,
        'File test',
        restaurant,
      )
    }).toThrow('Price must be greater than zero')
  })
  it('should throw error when File is empty', () => {
    expect(() => {
      new Menu(
        'Id Test',
        'Name Test',
        'Description Test',
        99.99,
        '',
        restaurant,
      )
    }).toThrow('File is required')
  })
  it('should throw error when Restaurant is empty', () => {
    expect(() => {
      new Menu(
        'Id Test',
        'Name Test',
        'Description Test',
        99.99,
        'File test',
        undefined,
      )
    }).toThrow('Restaurant is required')
  })

  it('should change name', () => {
    const menu = new Menu(
      'Id Test',
      'Name Test',
      'Description Test',
      99.99,
      'File test',
      restaurant,
    )

    menu.changeName('Name Test2')
    expect(menu.name).toBe('Name Test2')
  })

  it('should activate menu', () => {
    const menu = new Menu(
      'Id Test',
      'Name Test',
      'Description Test',
      99.99,
      'File test',
      restaurant,
    )

    menu.activate()

    expect(menu.isActive()).toBe(true)
  })
})
