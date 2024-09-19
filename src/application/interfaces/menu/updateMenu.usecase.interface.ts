import {
  InputUpdateMenuDto,
  OutputUpdateMenuDto,
} from '../../use-cases/menu/update/update.menu.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IUpdateMenuUseCase extends UseCaseInterface<
  InputUpdateMenuDto,
  OutputUpdateMenuDto
> {}
