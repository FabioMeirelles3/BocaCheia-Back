import {
  InputCreateClientDto,
  OutputCreateClientDto,
} from '../../use-cases/client/create/create.client.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class ICreateClientUseCase extends UseCaseInterface<
  InputCreateClientDto,
  OutputCreateClientDto
> {}
