import {
  InputFindClientDto,
  OutputFindClientDto,
} from '../../use-cases/client/find/find.client.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindClientUseCase extends UseCaseInterface<
  InputFindClientDto,
  OutputFindClientDto
> {}
