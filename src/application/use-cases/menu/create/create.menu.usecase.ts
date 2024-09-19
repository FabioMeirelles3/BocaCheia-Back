import { v4 as uuid } from 'uuid'
import { Injectable } from '@nestjs/common'

import { InputCreateMenuDto, OutputCreateMenuDto } from './create.menu.dto'
import { ICreateMenuUseCase } from '../../../interfaces/menu/createMenu.usecase.interface'
import { RestaurantRepositoryInterface } from '../../../interfaces/restaurant/restaurant-repository'
import { Menu } from '../../../../domain/entity/menu.entity'
import { MenuRepositoryInterface } from '../../../interfaces/menu/menu-repository'

@Injectable()
export default class CreateMenuUseCase implements ICreateMenuUseCase {
  constructor(
    private readonly menuRepository: MenuRepositoryInterface,
    private readonly restaurantRepository: RestaurantRepositoryInterface,
  ) {}

  async execute(input: InputCreateMenuDto): Promise<OutputCreateMenuDto> {
    const restaurant = await this.restaurantRepository.find(input.restaurantId)

    if (!restaurant) {
      throw new Error('Restaurant not found')
    }

    const menu = new Menu(
      uuid(),
      input.name,
      input.description,
      input.price,
      input.file,
      restaurant,
    )

    await this.menuRepository.create(menu)

    return {
      id: menu.id,
      name: menu.name,
      description: menu.description,
      price: menu.price,
      file: menu.file,
      restaurantId: menu.restaurant.id,
    }
  }
}

export const CreateMenuUseCaseProvider = {
  provide: ICreateMenuUseCase,
  useClass: CreateMenuUseCase,
}
