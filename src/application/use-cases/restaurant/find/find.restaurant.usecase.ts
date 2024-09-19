import { Injectable } from '@nestjs/common'
import {
  InputFindRestaurantDto,
  OutputFindRestaurantDto,
} from './find.restaurant.dto'
import { RestaurantRepositoryInterface } from '../../../interfaces/restaurant/restaurant-repository'
import { IFindRestaurantUseCase } from '../../../interfaces/restaurant/findRestaurant.usecase.interface'

@Injectable()
export default class FindRestaurantUseCase implements IFindRestaurantUseCase {
  constructor(
    private readonly restaurantRepository: RestaurantRepositoryInterface,
  ) {}

  async execute(
    input: InputFindRestaurantDto,
  ): Promise<OutputFindRestaurantDto> {
    const restaurant = await this.restaurantRepository.find(input.toString())

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

export const FindRestaurantUseCaseProvider = {
  provide: IFindRestaurantUseCase,
  useClass: FindRestaurantUseCase,
}
