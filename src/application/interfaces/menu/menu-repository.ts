import { Menu } from '../../../domain/entity/menu.entity'
import { RepositoryInterface } from '../repository.interface'

export abstract class MenuRepositoryInterface extends RepositoryInterface<Menu> {
  abstract findByRestaurantId(restaurantId: string): Promise<Menu[]>
}
