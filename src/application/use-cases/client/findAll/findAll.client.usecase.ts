import { Client } from '../../../../domain/entity/clients.entity'
import { ClientRepositoryInterface } from '../../../interfaces/client/client-repository.interface'
import { IFindAllClientUseCase } from '../../../interfaces/client/findAllClient.usecase.interface'
import {
  InputFindAllClientDto,
  OutputFindAllClientDto,
} from './findAll.client.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export default class FindAllClientUseCase implements IFindAllClientUseCase {
  constructor(private readonly clientRepository: ClientRepositoryInterface) {}

  async execute(input: InputFindAllClientDto): Promise<OutputFindAllClientDto> {
    const clients = await this.clientRepository.findAll()

    return OutputMapper.toOutput(clients)
  }
}

class OutputMapper {
  static toOutput(client: Client[]): OutputFindAllClientDto {
    return {
      clients: client.map((client) => ({
        id: client.id,
        name: client.name,
        email: client.email,
        file: client.file,
      })),
    }
  }
}

export const FindAllClientUseCaseProvider = {
  provide: IFindAllClientUseCase,
  useClass: FindAllClientUseCase,
}
