import { v4 as uuid } from 'uuid'
import { Injectable } from '@nestjs/common'
import {
  InputCreateRestaurantDto,
  OutputCreateRestaurantDto,
} from './create.restaurant.dto'
import { ICreateRestaurantUseCase } from '../../../interfaces/restaurant/createRestaurant.usecase.interface'
import { RestaurantRepositoryInterface } from '../../../interfaces/restaurant/restaurant-repository'
import { Restaurant } from '../../../../domain/entity/restaurant.entity'

@Injectable()
export default class CreateRestaurantUseCase
  implements ICreateRestaurantUseCase
{
  constructor(
    private readonly restaurantRepository: RestaurantRepositoryInterface,
  ) {}

  async execute(
    input: InputCreateRestaurantDto,
  ): Promise<OutputCreateRestaurantDto> {
    const restaurant = new Restaurant(
      uuid(),
      input.name,
      input.description,
      input.phone,
      input.address,
      input.number,
      input.complement,
      input.district,
      input.file,
    )

    await this.restaurantRepository.create(restaurant)

    return {
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      phone: restaurant.phone,
      address: restaurant.address,
      number: restaurant.number,
      complement: restaurant.complement,
      district: restaurant.district,
      file: restaurant.file,
    }
  }
}

export const CreateRestaurantUseCaseProvider = {
  provide: ICreateRestaurantUseCase,
  useClass: CreateRestaurantUseCase,
}
