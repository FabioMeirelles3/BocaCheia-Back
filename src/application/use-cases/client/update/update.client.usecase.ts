import { ClientRepositoryInterface } from '../../../interfaces/client/client-repository.interface'
import { IUpdateClientUseCase } from '../../../interfaces/client/updateClient.usecase.interface'
import {
  InputUpdateClientDto,
  OutputUpdateClientDto,
} from './update.client.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export default class UpdateClientUseCase implements IUpdateClientUseCase {
  constructor(private readonly clientRepository: ClientRepositoryInterface) {}

  async execute(input: InputUpdateClientDto): Promise<OutputUpdateClientDto> {
    const client = await this.clientRepository.find(input.id)

    client.changeName(input.name)
    if (!!input.email) {
      client.changeEmail(input.email)
    }
    if (!!input.file) {
      client.changefile(input.file)
    }
    await this.clientRepository.update(client)

    return {
      id: client.id,
      name: client.name,
      email: client.email,
      file: client.file,
    }
  }
}

export const UpdateClientUseCaseProvider = {
  provide: IUpdateClientUseCase,
  useClass: UpdateClientUseCase,
}
