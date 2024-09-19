import CreateClientUseCase from './create.client.usecase'

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

describe('Unit test CreateClientUseCase', () => {
  beforeEach(() => {
    input = {
      name: 'Test Name',
      email: 'test@test.com',
      password: 'test',
      file: 'file.test',
    }
  })
  it('should create a client', async () => {
    const repository = MockRepository()
    const usecase = new CreateClientUseCase(repository)

    const output = await usecase.execute(input)

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      email: input.email,
      file: input.file,
    })
  })

  it('should thrown an error when name is missing', async () => {
    const repository = MockRepository()
    const usecase = new CreateClientUseCase(repository)

    input.name = ''

    await expect(usecase.execute(input)).rejects.toThrow('Name is required')
  })

  it('should thrown an error when email is missing', async () => {
    const repository = MockRepository()
    const usecase = new CreateClientUseCase(repository)

    input.email = ''

    await expect(usecase.execute(input)).rejects.toThrow('Email is required')
  })
})
