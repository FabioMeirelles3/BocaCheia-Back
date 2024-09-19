import { Injectable } from '@nestjs/common'
import { InputUpdateMenuDto, OutputUpdateMenuDto } from './update.menu.dto'
import { IUpdateMenuUseCase } from '../../../interfaces/menu/updateMenu.usecase.interface'
import { MenuRepositoryInterface } from '../../../interfaces/menu/menu-repository'

@Injectable()
export default class UpdateMenuUseCase implements IUpdateMenuUseCase {
  constructor(private readonly menuRepository: MenuRepositoryInterface) {}

  async execute(input: InputUpdateMenuDto): Promise<OutputUpdateMenuDto> {
    const menu = await this.menuRepository.find(input.id)

    if (!!input.name) {
      menu.changeName(input.name)
    }
    if (!!input.description) {
      menu.changeDescription(input.description)
    }
    if (!!input.price) {
      menu.alterPrice(input.price)
    }

    if (!!input.file) {
      menu.changeFile(input.file)
    }
    await this.menuRepository.update(menu)

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

export const UpdateMenuUseCaseProvider = {
  provide: IUpdateMenuUseCase,
  useClass: UpdateMenuUseCase,
}
