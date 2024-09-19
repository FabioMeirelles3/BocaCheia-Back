import {
  InputFindMenuDto,
  OutputFindMenuDto,
} from '../../use-cases/menu/find/find.menu.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindMenuUseCase extends UseCaseInterface<
  InputFindMenuDto,
  OutputFindMenuDto
> {}
