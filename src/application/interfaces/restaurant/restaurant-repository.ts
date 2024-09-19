import { Restaurant } from '../../../domain/entity/restaurant.entity'
import { RepositoryInterface } from '../repository.interface'

export abstract class RestaurantRepositoryInterface extends RepositoryInterface<Restaurant> {}
