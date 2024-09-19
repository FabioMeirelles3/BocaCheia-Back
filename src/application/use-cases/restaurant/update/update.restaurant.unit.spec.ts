import { Restaurant } from '../../../../domain/entity/restaurant.entity'
import UpdateRestaurantUseCase from './update.restaurant.usecase'

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
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(restaurant)),
    update: jest.fn(),
  }
}

describe('Unit test for UpdateRestaurantUseCase', () => {
  it('should update a restaurant', async () => {
    const repository = MockRepository()
    const usecase = new UpdateRestaurantUseCase(repository)

    const input = {
      id: restaurant.id,
      name: 'Update Name',
      description: 'Update Description',
      phone: 'Update Phone',
      address: 'Update Address',
      number: 'Update Number',
      complement: 'Update Complement',
      district: 'Update District',
      file: 'Update File',
    }

    const output = {
      id: restaurant.id,
      name: 'Update Name',
      description: 'Update Description',
      phone: 'Update Phone',
      address: 'Update Address',
      number: 'Update Number',
      complement: 'Update Complement',
      district: 'Update District',
      file: 'Update File',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })
})
