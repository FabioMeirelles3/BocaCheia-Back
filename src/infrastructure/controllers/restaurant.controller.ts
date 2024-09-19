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
import { ICreateRestaurantUseCase } from '../../application/interfaces/restaurant/createRestaurant.usecase.interface'
import { IFindRestaurantUseCase } from '../../application/interfaces/restaurant/findRestaurant.usecase.interface'
import { IFindAllRestaurantUseCase } from '../../application/interfaces/restaurant/findAllRestaurant.usecase.interface'
import { IUpdateRestaurantUseCase } from '../../application/interfaces/restaurant/updateRestaurant.usecase.interface'
import { InputCreateRestaurantDto } from '../../application/use-cases/restaurant/create/create.restaurant.dto'
import { InputUpdateRestaurantDto } from '../../application/use-cases/restaurant/update/update.restaurant.dto'
import { InputFindRestaurantDto } from '../../application/use-cases/restaurant/find/find.restaurant.dto'

@Controller('restaurants')
@UseGuards(JwtAuthGuard)
export class RestaurantController {
  constructor(
    private readonly createRestaurantUseCase: ICreateRestaurantUseCase,
    private readonly findRestaurantUseCase: IFindRestaurantUseCase,
    private readonly findAllRestaurantUseCase: IFindAllRestaurantUseCase,
    private readonly updateRestaurantUseCase: IUpdateRestaurantUseCase,
  ) {}

  @Post()
  async create(@Body() createRestaurantDto: InputCreateRestaurantDto) {
    return this.createRestaurantUseCase.execute(createRestaurantDto)
  }

  @Patch()
  async update(@Body() updateRestaurantDto: InputUpdateRestaurantDto) {
    return this.updateRestaurantUseCase.execute(updateRestaurantDto)
  }

  @Get('/:id')
  async findById(@Param('id') id: InputFindRestaurantDto) {
    return this.findRestaurantUseCase.execute(id)
  }

  @Get()
  async findAll() {
    return this.findAllRestaurantUseCase.execute({})
  }
}
