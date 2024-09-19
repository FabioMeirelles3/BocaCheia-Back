import { Menu } from '../../../../domain/entity/menu.entity'
import { Restaurant } from '../../../../domain/entity/restaurant.entity'
import UpdateMenuUseCase from './update.menu.usecase'

const restaurant = new Restaurant(
  'RestId',
  'Test Name',
  'Test Description',
  'Test Phone',
  'Test Address',
  'Test Number',
  'Test Complement',
  'Test District',
  'Test File',
)

const menu = new Menu(
  'TestId',
  'Test Name',
  'test@test.com',
  11.11,
  'file.test',
  restaurant,
)

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(menu)),
    findAll: jest.fn(),
    findByRestaurantId: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
}

describe('Unit test UpdateMenuUseCase', () => {
  it('should update a menu', async () => {
    const repository = MockRepository()
    const usecase = new UpdateMenuUseCase(repository)

    const input = {
      id: menu.id,
      name: 'Test Name',
      description: 'Test Description',
      price: 11.11,
      file: 'Test File',
      restaurantId: restaurant.id,
    }

    const output = {
      id: menu.id,
      name: 'Test Name',
      description: 'Test Description',
      price: 11.11,
      file: 'Test File',
      restaurantId: restaurant.id,
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })
})
