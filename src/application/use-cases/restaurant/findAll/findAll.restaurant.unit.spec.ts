import { Restaurant } from '../../../../domain/entity/restaurant.entity'
import FindAllRestaurantUseCase from './findAll.restaurant.usecase'

const restaurant1 = new Restaurant(
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

const restaurant2 = new Restaurant(
  'Test2 ID',
  'Test2 Name',
  'Test2 Description',
  'Test2 Phone',
  'Test2 Address',
  'Test2 Number',
  'Test2 Complement',
  'Test2 District',
  'Test2 File',
)

const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
    findByEmail: jest.fn(),
    update: jest.fn(),
    findAll: jest
      .fn()
      .mockReturnValue(Promise.resolve([restaurant1, restaurant2])),
  }
}

describe('Unit test FindAllRestaurantUseCase', () => {
  it('should list a restaurant', async () => {
    const repository = MockRepository()
    const useCase = new FindAllRestaurantUseCase(repository)

    const output = await useCase.execute({})

    expect(output.restaurants.length).toBe(2)
    expect(output.restaurants[0].id).toBe(restaurant1.id)
    expect(output.restaurants[0].name).toBe(restaurant1.name)
    expect(output.restaurants[0].description).toBe(restaurant1.description)
    expect(output.restaurants[0].phone).toBe(restaurant1.phone)
    expect(output.restaurants[0].address).toBe(restaurant1.address)
    expect(output.restaurants[0].number).toBe(restaurant1.number)
    expect(output.restaurants[0].complement).toBe(restaurant1.complement)
    expect(output.restaurants[0].district).toBe(restaurant1.district)
    expect(output.restaurants[0].file).toBe(restaurant1.file)
    expect(output.restaurants[1].id).toBe(restaurant2.id)
    expect(output.restaurants[1].name).toBe(restaurant2.name)
    expect(output.restaurants[1].description).toBe(restaurant2.description)
    expect(output.restaurants[1].phone).toBe(restaurant2.phone)
    expect(output.restaurants[1].address).toBe(restaurant2.address)
    expect(output.restaurants[1].number).toBe(restaurant2.number)
    expect(output.restaurants[1].complement).toBe(restaurant2.complement)
    expect(output.restaurants[1].district).toBe(restaurant2.district)
    expect(output.restaurants[1].file).toBe(restaurant2.file)
  })
})
