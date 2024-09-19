import { Injectable } from '@nestjs/common'
import {
  InputCreateClientDto,
  OutputCreateClientDto,
} from './create.client.dto'
import { v4 as uuid } from 'uuid'
import { ClientRepositoryInterface } from '../../../interfaces/client/client-repository.interface'
import { Client } from '../../../../domain/entity/clients.entity'
import { ICreateClientUseCase } from '../../../interfaces/client/createClient.usecase.interface'

@Injectable()
export default class CreateClientUseCase implements ICreateClientUseCase {
  constructor(private readonly clientRepository: ClientRepositoryInterface) {}

  async execute(input: InputCreateClientDto): Promise<OutputCreateClientDto> {
    const client = new Client(
      uuid(),
      input.name,
      input.email,
      input.password,
      input.file,
    )

    await this.clientRepository.create(client)

    return {
      id: client.id,
      name: client.name,
      email: client.email,
      file: client.file,
    }
  }
}

export const CreateClientUseCaseProvider = {
  provide: ICreateClientUseCase,
  useClass: CreateClientUseCase,
}
