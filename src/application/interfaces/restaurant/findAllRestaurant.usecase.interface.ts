import {
  InputFindAllRestaurantDto,
  OutputFindAllRestaurantDto,
} from '../../use-cases/restaurant/findAll/findAll.restaurant.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindAllRestaurantUseCase extends UseCaseInterface<
  InputFindAllRestaurantDto,
  OutputFindAllRestaurantDto
> {}
