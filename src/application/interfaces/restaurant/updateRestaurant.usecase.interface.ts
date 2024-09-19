import {
  InputUpdateRestaurantDto,
  OutputUpdateRestaurantDto,
} from '../../use-cases/restaurant/update/update.restaurant.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IUpdateRestaurantUseCase extends UseCaseInterface<
  InputUpdateRestaurantDto,
  OutputUpdateRestaurantDto
> {}
