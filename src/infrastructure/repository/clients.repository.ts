import { Injectable } from '@nestjs/common'
import { hash } from 'bcryptjs'
import { PrismaService } from '../database/prisma.service'
import { ClientRepositoryInterface } from '../../application/interfaces/client/client-repository.interface'
import { Client } from '../../domain/entity/clients.entity'

@Injectable()
export class ClientRepository implements ClientRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(client: Client): Promise<void> {
    const hashedPassword = await hash(client.password, 10)
    await this.prisma.client.create({
      data: {
        id: client.id,
        name: client.name,
        file: client.file,
        email: client.email,
        password: hashedPassword,
        active: true,
      },
    })
  }

  async update(client: Client): Promise<void> {
    await this.prisma.client.update({
      where: { id: client.id },
      data: {
        name: client.name,
        email: client.email,
        password: client.password,
        file: client.file,
      },
    })
  }

  async find(id: string): Promise<Client> {
    const findClient = await this.prisma.client.findUnique({
      where: { id },
    })

    if (findClient == undefined) {
      throw new Error(`Client not found`)
    }

    const client = new Client(
      id,
      findClient.name,
      findClient.email,
      findClient.password,
      findClient.file,
    )

    return client
  }

  async findAll(): Promise<Client[]> {
    const findClients = await this.prisma.client.findMany()
    const clients = findClients.map((findClient) => {
      const client = new Client(
        findClient.id,
        findClient.name,
        findClient.email,
        findClient.password,
        findClient.file,
      )
      return client
    })
    return clients
  }

  async findByEmail(email: string): Promise<Client> {
    let findClient
    try {
      findClient = await this.prisma.client.findUnique({
        where: { email: email },
      })
    } catch (error) {
      throw new Error('Client not found')
    }

    const client = new Client(
      findClient.id,
      findClient.name,
      email,
      findClient.password,
      findClient.file,
    )

    return client
  }
}

export const ClientRepositoryProvider = {
  provide: ClientRepositoryInterface,
  useClass: ClientRepository,
}
