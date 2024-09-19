import { ClientRepositoryInterface } from '../../../interfaces/client/client-repository.interface'
import { IFindEmailClientUseCase } from '../../../interfaces/client/findEmailClient.usecase.interface'
import {
  InputFindEmailClientDto,
  OutputFindEmailClientDto,
} from './findEmail.client.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export default class FindEmailClientUseCase implements IFindEmailClientUseCase {
  constructor(private readonly clientRepository: ClientRepositoryInterface) {}

  async execute(
    input: InputFindEmailClientDto,
  ): Promise<OutputFindEmailClientDto> {
    const client = await this.clientRepository.findByEmail(input.toString())

    return {
      id: client.id,
      name: client.name,
      email: client.email,
      password: client.password,
    }
  }
}

export const FindEmailClientUseCaseProvider = {
  provide: IFindEmailClientUseCase,
  useClass: FindEmailClientUseCase,
}
