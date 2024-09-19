import { Menu } from '../../../../domain/entity/menu.entity'
import { Restaurant } from '../../../../domain/entity/restaurant.entity'
import FindRestaurantMenuUseCase from './findRestaurant.menu.usecase'

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
    find: jest.fn(),
    findAll: jest.fn(),
    findByRestaurantId: jest.fn().mockReturnValue(Promise.resolve([menu])),
    create: jest.fn(),
    update: jest.fn(),
  }
}

describe('FindEmailClientUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindRestaurantMenuUseCase(repository)
  it('should return restaurant', async () => {
    const input = { restaurantId: 'RestId' }

    const output = await usecase.execute(input)

    expect(output.menus.length).toBe(1)
    expect(output.menus[0].id).toBe(menu.id)
    expect(output.menus[0].name).toBe(menu.name)
    expect(output.menus[0].description).toBe(menu.description)
    expect(output.menus[0].price).toBe(menu.price)
    expect(output.menus[0].file).toBe(menu.file)
    expect(output.menus[0].restaurantId).toBe(menu.restaurant.id)
  })

  it('should not find a restaurant', async () => {
    const repository = MockRepository()
    repository.findByRestaurantId.mockImplementation(() => {
      throw new Error('Restaurant not found')
    })
    const usecase = new FindRestaurantMenuUseCase(repository)

    const input = {
      restaurantId: 'RestId2',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('Restaurant not found')
  })
})
