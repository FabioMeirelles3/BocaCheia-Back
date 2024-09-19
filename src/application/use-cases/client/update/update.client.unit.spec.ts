import { Client } from '../../../../domain/entity/clients.entity'
import UpdateClientUseCase from './update.client.usecase'

const client = new Client(
  'TestId',
  'Test Name',
  'test@test.com',
  'test',
  'file.test',
)

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(client)),
    update: jest.fn(),
  }
}

describe('Unit test UpdateClientUseCase', () => {
  it('should update a client', async () => {
    const repository = MockRepository()
    const usecase = new UpdateClientUseCase(repository)

    const input = {
      id: client.id,
      name: 'UpdatedName',
      email: 'update@update.com',
      password: 'update',
      file: 'update.test',
    }

    const output = {
      id: client.id,
      name: 'UpdatedName',
      email: 'update@update.com',
      file: 'update.test',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })
})
