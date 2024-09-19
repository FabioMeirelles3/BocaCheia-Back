import { Injectable } from '@nestjs/common'
import {
  InputUpdateRestaurantDto,
  OutputUpdateRestaurantDto,
} from './update.restaurant.dto'
import { IUpdateRestaurantUseCase } from '../../../interfaces/restaurant/updateRestaurant.usecase.interface'
import { RestaurantRepositoryInterface } from '../../../interfaces/restaurant/restaurant-repository'

@Injectable()
export default class UpdateRestaurantUseCase
  implements IUpdateRestaurantUseCase
{
  constructor(
    private readonly restaurantRepository: RestaurantRepositoryInterface,
  ) {}

  async execute(
    input: InputUpdateRestaurantDto,
  ): Promise<OutputUpdateRestaurantDto> {
    const restaurant = await this.restaurantRepository.find(input.id)

    if (!!input.name) {
      restaurant.changeName(input.name)
    }
    if (!!input.description) {
      restaurant.changeDescription(input.description)
    }
    if (!!input.phone) {
      restaurant.changePhone(input.phone)
    }
    if (!!input.address) {
      restaurant.changeAddress(input.address)
    }
    if (!!input.number) {
      restaurant.changeNumber(input.number)
    }
    if (!!input.complement) {
      restaurant.changeComplement(input.complement)
    }
    if (!!input.district) {
      restaurant.changeDistrict(input.district)
    }
    if (!!input.file) {
      restaurant.changeFile(input.file)
    }

    await this.restaurantRepository.update(restaurant)

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

export const UpdateRestaurantUseCaseProvider = {
  provide: IUpdateRestaurantUseCase,
  useClass: UpdateRestaurantUseCase,
}
