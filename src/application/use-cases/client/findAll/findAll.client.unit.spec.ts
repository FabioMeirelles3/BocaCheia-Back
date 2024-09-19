import { Client } from '../../../../domain/entity/clients.entity'
import FindAllClientUseCase from './findAll.client.usecase'

const client1 = new Client(
  'TestId1',
  'Test Name1',
  'test1@test.com',
  'test1',
  'file1.test',
)

const client2 = new Client(
  'TestId2',
  'Test2 Name',
  'test2@test.com',
  'test2',
  'file2.test',
)

const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
    findByEmail: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([client1, client2])),
  }
}

describe('Unit test FindAllClientUseCase', () => {
  it('should find all clients', async () => {
    const repository = MockRepository()
    const useCase = new FindAllClientUseCase(repository)

    const output = await useCase.execute({})

    expect(output.clients.length).toBe(2)
    expect(output.clients[0].id).toBe(client1.id)
    expect(output.clients[0].name).toBe(client1.name)
    expect(output.clients[0].email).toBe(client1.email)
    expect(output.clients[0].file).toBe(client1.file)
    expect(output.clients[1].id).toBe(client2.id)
    expect(output.clients[1].name).toBe(client2.name)
    expect(output.clients[1].email).toBe(client2.email)
    expect(output.clients[1].file).toBe(client2.file)
  })
})
