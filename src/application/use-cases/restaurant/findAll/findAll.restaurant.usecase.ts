import { Injectable } from '@nestjs/common'
import {
  InputFindAllRestaurantDto,
  OutputFindAllRestaurantDto,
} from './findAll.restaurant.dto'
import { RestaurantRepositoryInterface } from '../../../interfaces/restaurant/restaurant-repository'
import { Restaurant } from '../../../../domain/entity/restaurant.entity'
import { IFindAllRestaurantUseCase } from '../../../interfaces/restaurant/findAllRestaurant.usecase.interface'

@Injectable()
export default class FindAllRestaurantUseCase
  implements IFindAllRestaurantUseCase
{
  constructor(
    private readonly restaurantRepository: RestaurantRepositoryInterface,
  ) {}

  async execute(
    input: InputFindAllRestaurantDto,
  ): Promise<OutputFindAllRestaurantDto> {
    const restaurants = await this.restaurantRepository.findAll()

    return OutputMapper.toOutput(restaurants)
  }
}

class OutputMapper {
  static toOutput(restaurant: Restaurant[]): OutputFindAllRestaurantDto {
    return {
      restaurants: restaurant.map((restaurant) => ({
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        phone: restaurant.phone,
        address: restaurant.address,
        number: restaurant.number,
        complement: restaurant.complement,
        district: restaurant.district,
        file: restaurant.file,
      })),
    }
  }
}

export const FindAllRestaurantUseCaseProvider = {
  provide: IFindAllRestaurantUseCase,
  useClass: FindAllRestaurantUseCase,
}
