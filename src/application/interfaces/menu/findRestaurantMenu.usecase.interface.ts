import {
  InputFindRestaurantMenuDto,
  OutputFindRestaurantMenuDto,
} from '../../use-cases/menu/findRestaurant/findRestaurant.menu.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindRestaurantMenuUseCase extends UseCaseInterface<
  InputFindRestaurantMenuDto,
  OutputFindRestaurantMenuDto
> {}
