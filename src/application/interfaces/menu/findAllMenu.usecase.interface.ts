import {
  InputFindAllMenuDto,
  OutputFindAllMenuDto,
} from '../../use-cases/menu/findAll/findAll.menu.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindAllMenuUseCase extends UseCaseInterface<
  InputFindAllMenuDto,
  OutputFindAllMenuDto
> {}
