import { Restaurant } from '../../../../domain/entity/restaurant.entity'
import FindRestaurantUseCase from './find.restaurant.usecase'

const restaurant = new Restaurant(
  'Test ID',
  'Test Name',
  'Test Description',
  'Test Phone',
  'Test Address',
  'Test Number',
  'Test Complement',
  'Test District',
  'Test File',
)

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(restaurant)),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
  }
}

describe('Unit test FindClientUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindRestaurantUseCase(repository)
  it('should return restaurant', async () => {
    const input = { id: 'Test ID' }

    const output = {
      id: 'Test ID',
      name: 'Test Name',
      description: 'Test Description',
      phone: 'Test Phone',
      address: 'Test Address',
      number: 'Test Number',
      complement: 'Test Complement',
      district: 'Test District',
      file: 'Test File',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })

  it('should not find a restaurant', async () => {
    const repository = MockRepository()
    repository.find.mockImplementation(() => {
      throw new Error('Restaurant not found')
    })
    const usecase = new FindRestaurantUseCase(repository)

    const input = {
      id: 'Teste ID2',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('Restaurant not found')
  })
})
