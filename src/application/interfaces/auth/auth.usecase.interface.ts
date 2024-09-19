import {
  InputAuthenticateClientDto,
  OutputAuthenticateClientDto,
} from '../../use-cases/auth/authenticate.client.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IAuthUseCase extends UseCaseInterface<
  InputAuthenticateClientDto,
  OutputAuthenticateClientDto
> {}
