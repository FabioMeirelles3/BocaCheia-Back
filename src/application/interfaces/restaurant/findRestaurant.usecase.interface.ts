import {
  InputFindRestaurantDto,
  OutputFindRestaurantDto,
} from '../../use-cases/restaurant/find/find.restaurant.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindRestaurantUseCase extends UseCaseInterface<
  InputFindRestaurantDto,
  OutputFindRestaurantDto
> {}
