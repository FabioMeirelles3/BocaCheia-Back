import { Client } from '../../../../domain/entity/clients.entity'
import FindEmailClientUseCase from './findEmail.client.usecase'

const client = new Client(
  'TestId',
  'Test Name',
  'test@test.com',
  'test',
  'file.test',
)

const MockRepository = () => {
  return {
    find: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn().mockReturnValue(Promise.resolve(client)),
  }
}

describe('Unit test FindEmailClientUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindEmailClientUseCase(repository)
  it('should return client', async () => {
    const input = { email: 'test@test.com' }

    const output = {
      id: 'TestId',
      name: 'Test Name',
      email: 'test@test.com',
      password: 'test',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })

  it('should not find a client', async () => {
    const repository = MockRepository()
    repository.findByEmail.mockImplementation(() => {
      throw new Error('Client not found')
    })
    const usecase = new FindEmailClientUseCase(repository)

    const input = {
      email: 'test2@test.com',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('Client not found')
  })
})
