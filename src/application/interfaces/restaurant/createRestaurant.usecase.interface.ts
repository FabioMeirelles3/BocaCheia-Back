import {
  InputCreateRestaurantDto,
  OutputCreateRestaurantDto,
} from '../../use-cases/restaurant/create/create.restaurant.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class ICreateRestaurantUseCase extends UseCaseInterface<
  InputCreateRestaurantDto,
  OutputCreateRestaurantDto
> {}
