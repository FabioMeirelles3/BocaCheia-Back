import FindClientUseCase from './find.client.usecase'
import { Client } from '../../../../domain/entity/clients.entity'

const client = new Client(
  'TestId',
  'Test Name',
  'test@test.com',
  'test',
  'file.test',
)

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(client)),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
  }
}

describe('Unit test FindClientUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindClientUseCase(repository)
  it('should return client data', async () => {
    const input = { id: 'TestId' }

    const output = {
      id: 'TestId',
      name: 'Test Name',
      email: 'test@test.com',
      file: 'file.test',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })

  it('should not find a client', async () => {
    const repository = MockRepository()
    repository.find.mockImplementation(() => {
      throw new Error('Client not found')
    })
    const usecase = new FindClientUseCase(repository)

    const input = {
      id: 'TesteId2',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('Client not found')
  })
})
