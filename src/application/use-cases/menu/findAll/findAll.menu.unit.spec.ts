import { Menu } from '../../../../domain/entity/menu.entity'
import { Restaurant } from '../../../../domain/entity/restaurant.entity'
import FindAllMenuUseCase from './findAll.menu.usecase'

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

const menu1 = new Menu(
  'MenuId',
  'Test Name',
  'Test Description',
  11.11,
  'Test File',
  restaurant,
)

const menu2 = new Menu(
  'MenuId2',
  'Test2 Name',
  'Test2 Description',
  11.11,
  'Test2 File',
  restaurant,
)

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([menu1, menu2])),
    findByRestaurantId: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
}

describe('Unit test FindAllMenuUseCase', () => {
  it('should find all menu', async () => {
    const repository = MockRepository()
    const useCase = new FindAllMenuUseCase(repository)

    const output = await useCase.execute({})

    expect(output.menus.length).toBe(2)
    expect(output.menus[0].id).toBe(menu1.id)
    expect(output.menus[0].name).toBe(menu1.name)
    expect(output.menus[0].description).toBe(menu1.description)
    expect(output.menus[0].price).toBe(menu1.price)
    expect(output.menus[0].file).toBe(menu1.file)
    expect(output.menus[0].restaurantId).toBe(menu1.restaurant.id)
    expect(output.menus[1].id).toBe(menu2.id)
    expect(output.menus[1].name).toBe(menu2.name)
    expect(output.menus[1].description).toBe(menu2.description)
    expect(output.menus[1].price).toBe(menu2.price)
    expect(output.menus[1].file).toBe(menu2.file)
    expect(output.menus[1].restaurantId).toBe(menu2.restaurant.id)
  })
})
