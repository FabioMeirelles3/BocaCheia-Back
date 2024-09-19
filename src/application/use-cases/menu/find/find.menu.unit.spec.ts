import { Menu } from '../../../../domain/entity/menu.entity'
import { Restaurant } from '../../../../domain/entity/restaurant.entity'
import FindMenuUseCase from './find.menu.usecase'

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
  'MenuId',
  'Test Name',
  'Test Description',
  11.11,
  'Test File',
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

describe('Unit Test FindMenuUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindMenuUseCase(repository)
  it('should return menu data', async () => {
    const input = { id: 'MenuId' }

    const output = {
      id: 'MenuId',
      name: 'Test Name',
      description: 'Test Description',
      price: 11.11,
      file: 'Test File',
      restaurantId: restaurant.id,
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })

  it('should not find a menu', async () => {
    const repository = MockRepository()
    repository.find.mockImplementation(() => {
      throw new Error('Menu not found')
    })
    const usecase = new FindMenuUseCase(repository)

    const input = {
      id: 'MenuId2',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('Menu not found')
  })
})
