import {
  InputFindEmailClientDto,
  OutputFindEmailClientDto,
} from '../../use-cases/client/findEmail/findEmail.client.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindEmailClientUseCase extends UseCaseInterface<
  InputFindEmailClientDto,
  OutputFindEmailClientDto
> {}
