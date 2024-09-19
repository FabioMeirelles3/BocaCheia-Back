import { Injectable } from '@nestjs/common'
import { InputFindMenuDto, OutputFindMenuDto } from './find.menu.dto'
import { IFindMenuUseCase } from '../../../interfaces/menu/findMenu.usecase.interface'
import { MenuRepositoryInterface } from '../../../interfaces/menu/menu-repository'

@Injectable()
export default class FindMenuUseCase implements IFindMenuUseCase {
  constructor(private readonly menuRepository: MenuRepositoryInterface) {}

  async execute(input: InputFindMenuDto): Promise<OutputFindMenuDto> {
    const menu = await this.menuRepository.find(input.toString())

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

export const FindMenuUseCaseProvider = {
  provide: IFindMenuUseCase,
  useClass: FindMenuUseCase,
}
