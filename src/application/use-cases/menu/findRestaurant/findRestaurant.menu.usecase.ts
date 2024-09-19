import { Injectable } from '@nestjs/common'
import {
  InputFindRestaurantMenuDto,
  OutputFindRestaurantMenuDto,
} from './findRestaurant.menu.dto'
import { IFindRestaurantMenuUseCase } from '../../../interfaces/menu/findRestaurantMenu.usecase.interface'
import { MenuRepositoryInterface } from '../../../interfaces/menu/menu-repository'
import { Menu } from '../../../../domain/entity/menu.entity'

@Injectable()
export default class FindRestaurantMenuUseCase
  implements IFindRestaurantMenuUseCase
{
  constructor(private readonly menuRepository: MenuRepositoryInterface) {}

  async execute(
    input: InputFindRestaurantMenuDto,
  ): Promise<OutputFindRestaurantMenuDto> {
    const menus = await this.menuRepository.findByRestaurantId(input.toString())

    return OutputMapper.toOutput(menus)
  }
}

class OutputMapper {
  static toOutput(menu: Menu[]): OutputFindRestaurantMenuDto {
    return {
      menus: menu.map((menu) => ({
        id: menu.id,
        name: menu.name,
        description: menu.description,
        price: menu.price,
        file: menu.file,
        restaurantId: menu.restaurant.id,
      })),
    }
  }
}

export const FindRestaurantMenuUseCaseProvider = {
  provide: IFindRestaurantMenuUseCase,
  useClass: FindRestaurantMenuUseCase,
}
