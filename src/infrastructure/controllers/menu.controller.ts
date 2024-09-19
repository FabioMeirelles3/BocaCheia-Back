import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ICreateMenuUseCase } from '../../application/interfaces/menu/createMenu.usecase.interface'
import { IFindMenuUseCase } from '../../application/interfaces/menu/findMenu.usecase.interface'
import { IFindRestaurantMenuUseCase } from '../../application/interfaces/menu/findRestaurantMenu.usecase.interface'
import { IFindAllMenuUseCase } from '../../application/interfaces/menu/findAllMenu.usecase.interface'
import { IUpdateMenuUseCase } from '../../application/interfaces/menu/updateMenu.usecase.interface'
import { InputCreateMenuDto } from '../../application/use-cases/menu/create/create.menu.dto'
import { InputUpdateMenuDto } from '../../application/use-cases/menu/update/update.menu.dto'
import { InputFindMenuDto } from '../../application/use-cases/menu/find/find.menu.dto'
import { InputFindRestaurantMenuDto } from '../../application/use-cases/menu/findRestaurant/findRestaurant.menu.dto'

@Controller('menus')
export class MenuController {
  constructor(
    private readonly createMenuUseCase: ICreateMenuUseCase,
    private readonly findMenuUseCase: IFindMenuUseCase,
    private readonly findRestaurantMenuUseCase: IFindRestaurantMenuUseCase,
    private readonly findAllMenuUseCase: IFindAllMenuUseCase,
    private readonly updateMenuUseCase: IUpdateMenuUseCase,
  ) {}

  @Post()
  async create(@Body() createMenuDto: InputCreateMenuDto) {
    return this.createMenuUseCase.execute(createMenuDto)
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async update(@Body() updateMenuDto: InputUpdateMenuDto) {
    return this.updateMenuUseCase.execute(updateMenuDto)
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: InputFindMenuDto) {
    return this.findMenuUseCase.execute(id)
  }

  @Get('rest/:id')
  async findByRestaurant(
    @Param('id') restaurantId: InputFindRestaurantMenuDto,
  ) {
    return this.findRestaurantMenuUseCase.execute(restaurantId)
  }

  @Get()
  async findAll() {
    return this.findAllMenuUseCase.execute({})
  }
}
