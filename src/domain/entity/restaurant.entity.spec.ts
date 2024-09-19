import { Restaurant } from './restaurant.entity'

describe('Restaurant tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Restaurant(
        '',
        'Name Test',
        'Description Test',
        '99999999',
        'address Test',
        'number Test',
        'complement Teste',
        'district Test',
        'file Test',
      )
    }).toThrow('Id is required')
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      new Restaurant(
        'Id Test',
        '',
        'Description Test',
        '99999999',
        'address Test',
        'number Test',
        'complement Teste',
        'district Test',
        'file Test',
      )
    }).toThrow('Name is required')
  })

  it('should throw error when Description is empty', () => {
    expect(() => {
      new Restaurant(
        'Id Test',
        'Name Test',
        '',
        '99999999',
        'address Test',
        'number Test',
        'complement Teste',
        'district Test',
        'file Test',
      )
    }).toThrow('Description is required')
  })
  it('should throw error when Phone is empty', () => {
    expect(() => {
      new Restaurant(
        'Id Test',
        'Name Test',
        'Description Test',
        '',
        'address Test',
        'number Test',
        'complement Teste',
        'district Test',
        'file Test',
      )
    }).toThrow('Phone is required')
  })
  it('should throw error when Address is empty', () => {
    expect(() => {
      new Restaurant(
        'Id Test',
        'Name Test',
        'Description Test',
        '99999999',
        '',
        'number Test',
        'complement Teste',
        'district Test',
        'file Test',
      )
    }).toThrow('Address is required')
  })
  it('should throw error when Number is empty', () => {
    expect(() => {
      new Restaurant(
        'Id Test',
        'Name Test',
        'Description Test',
        '99999999',
        'address Test',
        '',
        'complement Teste',
        'district Test',
        'file Test',
      )
    }).toThrow('Number is required')
  })
  it('should throw error when District is empty', () => {
    expect(() => {
      new Restaurant(
        'Id Test',
        'Name Test',
        'Description Test',
        '99999999',
        'address Test',
        'number Test',
        'complement Teste',
        '',
        'file Test',
      )
    }).toThrow('District is required')
  })
  it('should throw error when File is empty', () => {
    expect(() => {
      new Restaurant(
        'Id Test',
        'Name Test',
        'Description Test',
        '99999999',
        'address Test',
        'number Test',
        'complement Teste',
        'district Test',
        '',
      )
    }).toThrow('File is required')
  })

  it('should change name', () => {
    const restaurant = new Restaurant(
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

    restaurant.changeName('Name Test2')
    expect(restaurant.name).toBe('Name Test2')
  })

  it('should activate restaurant', () => {
    const restaurant = new Restaurant(
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

    restaurant.activate()

    expect(restaurant.isActive()).toBe(true)
  })
})
