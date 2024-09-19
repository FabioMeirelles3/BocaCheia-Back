import CreateRestaurantUseCase from './create.restaurant.usecase'

let input

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
}

describe('Unit test CreateRestaurantUseCase', () => {
  beforeEach(() => {
    input = {
      name: 'Test Name',
      description: 'Test Description',
      phone: 'Test Phone',
      address: 'Test Address',
      number: 'Test Number',
      complement: 'Test complement',
      district: 'Test District',
      file: 'Test File',
    }
  })
  it('should create a restaurant', async () => {
    const repository = MockRepository()
    const usecase = new CreateRestaurantUseCase(repository)

    const output = await usecase.execute(input)

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      description: input.description,
      phone: input.phone,
      address: input.address,
      number: input.number,
      complement: input.complement,
      district: input.district,
      file: input.file,
    })
  })

  it('should thrown an error when name is missing', async () => {
    const repository = MockRepository()
    const usecase = new CreateRestaurantUseCase(repository)

    input.name = ''

    await expect(usecase.execute(input)).rejects.toThrow('Name is required')
  })

  it('should thrown an error when description is missing', async () => {
    const repository = MockRepository()
    const usecase = new CreateRestaurantUseCase(repository)

    input.description = ''

    await expect(usecase.execute(input)).rejects.toThrow(
      'Description is required',
    )
  })
})
