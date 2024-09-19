import { Injectable } from '@nestjs/common'
import { Restaurant } from 'src/domain/entity/restaurant.entity'
import { RestaurantRepositoryInterface } from 'src/application/interfaces/restaurant/restaurant-repository'
import { PrismaService } from 'src/infrastructure/database/prisma.service'

@Injectable()
export class RestaurantRepository implements RestaurantRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(restaurant: Restaurant): Promise<void> {
    await this.prisma.restaurant.create({
      data: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        phone: restaurant.phone,
        address: restaurant.address,
        number: restaurant.number,
        complement: restaurant.complement,
        district: restaurant.district,
        file: restaurant.file,
        active: true,
      },
    })
  }

  async update(restaurant: Restaurant): Promise<void> {
    await this.prisma.restaurant.update({
      where: { id: restaurant.id },
      data: {
        name: restaurant.name,
        description: restaurant.description,
        phone: restaurant.phone,
        address: restaurant.address,
        number: restaurant.number,
        complement: restaurant.complement,
        district: restaurant.district,
        file: restaurant.file,
        active: true,
      },
    })
  }

  async find(id: string): Promise<Restaurant> {
    const findRestaurant = await this.prisma.restaurant.findUnique({
      where: { id },
    })

    if (findRestaurant == undefined) {
      throw new Error(`Could not find restaurant`)
    }

    const restaurant = new Restaurant(
      id,
      findRestaurant.name,
      findRestaurant.description,
      findRestaurant.phone,
      findRestaurant.address,
      findRestaurant.number,
      findRestaurant.complement,
      findRestaurant.district,
      findRestaurant.file,
    )

    return restaurant
  }

  async findAll(): Promise<Restaurant[]> {
    const findRestaurants = await this.prisma.restaurant.findMany()
    const restaurants = findRestaurants.map((findRestaurant) => {
      const restaurant = new Restaurant(
        findRestaurant.id,
        findRestaurant.name,
        findRestaurant.description,
        findRestaurant.phone,
        findRestaurant.address,
        findRestaurant.number,
        findRestaurant.complement,
        findRestaurant.district,
        findRestaurant.file,
      )
      return restaurant
    })

    return restaurants
  }
}

export const RestaurantRepositoryProvider = {
  provide: RestaurantRepositoryInterface,
  useClass: RestaurantRepository,
}
