import {
  InputFindAllClientDto,
  OutputFindAllClientDto,
} from '../../use-cases/client/findAll/findAll.client.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindAllClientUseCase extends UseCaseInterface<
  InputFindAllClientDto,
  OutputFindAllClientDto
> {}
