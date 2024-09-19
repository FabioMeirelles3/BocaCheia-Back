import { Injectable } from '@nestjs/common'
import { ClientRepositoryInterface } from '../../../interfaces/client/client-repository.interface'
import { InputFindClientDto, OutputFindClientDto } from './find.client.dto'
import { IFindClientUseCase } from '../../../../application/interfaces/client/findClient.usecase.interface'

@Injectable()
export default class FindClientUseCase implements IFindClientUseCase {
  constructor(private readonly clientRepository: ClientRepositoryInterface) {}

  async execute(input: InputFindClientDto): Promise<OutputFindClientDto> {
    const client = await this.clientRepository.find(input.toString())

    return {
      id: client.id,
      name: client.name,
      email: client.email,
      file: client.file,
    }
  }
}

export const FindClientUseCaseProvider = {
  provide: IFindClientUseCase,
  useClass: FindClientUseCase,
}
