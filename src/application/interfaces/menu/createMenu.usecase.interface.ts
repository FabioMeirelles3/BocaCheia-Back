import {
  InputCreateMenuDto,
  OutputCreateMenuDto,
} from '../../use-cases/menu/create/create.menu.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class ICreateMenuUseCase extends UseCaseInterface<
  InputCreateMenuDto,
  OutputCreateMenuDto
> {}
