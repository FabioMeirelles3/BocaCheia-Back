import { Client } from './clients.entity'

describe('Client tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Client('', 'Test', 'test@test.com', '12345678', 'test')
    }).toThrow('Id is required')
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      new Client('test', '', 'test@test.com', '12345678', 'test')
    }).toThrow('Name is required')
  })

  it('should throw error when email is empty', () => {
    expect(() => {
      new Client('test', 'Test', '', '12345678', 'test')
    }).toThrow('Email is required')
  })

  it('should throw error when password is empty', () => {
    expect(() => {
      new Client('test', 'Test', 'test@test.com', '', 'test')
    }).toThrow('Password is required')
  })

  it('should throw error when file is empty', () => {
    expect(() => {
      new Client('test', 'Test', 'test@test.com', '12345678', '')
    }).toThrow('File is required')
  })

  it('should change name', () => {
    const client = new Client(
      'test',
      'Test',
      'test@test.com',
      '12345678',
      'test',
    )

    client.changeName('Test2')
    expect(client.name).toBe('Test2')
  })

  it('should activate client', () => {
    const client = new Client(
      'test',
      'Test',
      'test@test.com',
      '12345678',
      'test',
    )

    client.activate()

    expect(client.isActive()).toBe(true)
  })
})
