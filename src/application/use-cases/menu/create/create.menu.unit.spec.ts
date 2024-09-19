import { Restaurant } from '../../../../domain/entity/restaurant.entity'
import CreateMenuUseCase from './create.menu.usecase'

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

let input

const MockRepositoryMenu = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    findByRestaurantId: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
}

const MockRepositoryRestaurant = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(restaurant)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
}

describe('Unit test CreateMenuUseCase', () => {
  beforeEach(() => {
    input = {
      name: 'Test Name',
      description: 'Test Description',
      price: 11.11,
      file: 'Test File',
      restaurant: restaurant,
    }
  })
  it('should create a client', async () => {
    const repositoryMenu = MockRepositoryMenu()
    const repositoryRestaurant = MockRepositoryRestaurant()
    const usecase = new CreateMenuUseCase(repositoryMenu, repositoryRestaurant)

    const output = await usecase.execute(input)

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      description: input.description,
      price: input.price,
      file: input.file,
      restaurantId: input.restaurant.id,
    })
  })

  it('should thrown an error when name is missing', async () => {
    const repositoryMenu = MockRepositoryMenu()
    const repositoryRestaurant = MockRepositoryRestaurant()
    const usecase = new CreateMenuUseCase(repositoryMenu, repositoryRestaurant)

    input.name = ''

    await expect(usecase.execute(input)).rejects.toThrow('Name is required')
  })

  it('should thrown an error when description is missing', async () => {
    const repositoryMenu = MockRepositoryMenu()
    const repositoryRestaurant = MockRepositoryRestaurant()
    const usecase = new CreateMenuUseCase(repositoryMenu, repositoryRestaurant)

    input.description = ''

    await expect(usecase.execute(input)).rejects.toThrow(
      'Description is required',
    )
  })
})
