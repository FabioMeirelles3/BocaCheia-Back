import {
  InputUpdateClientDto,
  OutputUpdateClientDto,
} from '../../use-cases/client/update/update.client.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IUpdateClientUseCase extends UseCaseInterface<
  InputUpdateClientDto,
  OutputUpdateClientDto
> {}
