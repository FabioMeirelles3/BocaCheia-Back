import { Injectable } from '@nestjs/common'
import { InputFindAllMenuDto, OutputFindAllMenuDto } from './findAll.menu.dto'
import { IFindAllMenuUseCase } from '../../../interfaces/menu/findAllMenu.usecase.interface'
import { MenuRepositoryInterface } from '../../../interfaces/menu/menu-repository'
import { Menu } from '../../../../domain/entity/menu.entity'

@Injectable()
export default class FindAllMenuUseCase implements IFindAllMenuUseCase {
  constructor(private readonly menuRepository: MenuRepositoryInterface) {}

  async execute(input: InputFindAllMenuDto): Promise<OutputFindAllMenuDto> {
    const menus = await this.menuRepository.findAll()

    return OutputMapper.toOutput(menus)
  }
}

class OutputMapper {
  static toOutput(menu: Menu[]): OutputFindAllMenuDto {
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

export const FindAllMenuUseCaseProvider = {
  provide: IFindAllMenuUseCase,
  useClass: FindAllMenuUseCase,
}
