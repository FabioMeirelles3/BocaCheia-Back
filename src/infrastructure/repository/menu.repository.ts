import { Injectable } from '@nestjs/common'
import { MenuRepositoryInterface } from '../../application/interfaces/menu/menu-repository'
import { PrismaService } from '../database/prisma.service'
import { Menu } from '../../domain/entity/menu.entity'
import { Restaurant } from '../../domain/entity/restaurant.entity'

@Injectable()
export class MenuRepository implements MenuRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(menu: Menu): Promise<void> {
    await this.prisma.menu.create({
      data: {
        id: menu.id,
        name: menu.name,
        description: menu.description,
        price: menu.price,
        file: menu.file,
        restaurantId: menu.restaurant.id,
        active: true,
      },
    })
  }

  async update(menu: Menu): Promise<void> {
    await this.prisma.menu.update({
      where: { id: menu.id },
      data: {
        name: menu.name,
        description: menu.description,
        price: menu.price,
        file: menu.file,
        restaurantId: menu.restaurant.id,
      },
    })
  }

  async find(id: string): Promise<Menu> {
    const findMenu = await this.prisma.menu.findUnique({
      where: { id },
      include: { restaurant: true },
    })

    if (findMenu == undefined) {
      throw new Error(`Could not find menu`)
    }

    const restaurant = new Restaurant(
      findMenu.restaurant.id,
      findMenu.restaurant.name,
      findMenu.restaurant.description,
      findMenu.restaurant.phone,
      findMenu.restaurant.address,
      findMenu.restaurant.number,
      findMenu.restaurant.complement,
      findMenu.restaurant.district,
      findMenu.restaurant.file,
    )

    const menu = new Menu(
      id,
      findMenu.name,
      findMenu.description,
      findMenu.price,
      findMenu.file,
      restaurant,
    )

    return menu
  }

  async findAll(): Promise<Menu[]> {
    const findMenus = await this.prisma.menu.findMany({
      include: { restaurant: true },
    })

    const menus = findMenus.map((findMenu) => {
      const restaurant = new Restaurant(
        findMenu.restaurant.id,
        findMenu.restaurant.name,
        findMenu.restaurant.description,
        findMenu.restaurant.phone,
        findMenu.restaurant.address,
        findMenu.restaurant.number,
        findMenu.restaurant.complement,
        findMenu.restaurant.district,
        findMenu.restaurant.file,
      )

      const menu = new Menu(
        findMenu.id,
        findMenu.name,
        findMenu.description,
        findMenu.price,
        findMenu.file,
        restaurant,
      )
      return menu
    })
    return menus
  }

  async findByRestaurantId(restaurantId: string): Promise<Menu[]> {
    const findMenus = await this.prisma.menu.findMany({
      where: { restaurantId },
      include: { restaurant: true }, // Inclua o relacionamento com o restaurante
    })

    if (findMenus.length === 0) {
      throw new Error('Menu not found')
    }

    const menus = findMenus.map((findMenu) => {
      const restaurant = new Restaurant(
        findMenu.restaurant.id,
        findMenu.restaurant.name,
        findMenu.restaurant.description,
        findMenu.restaurant.phone,
        findMenu.restaurant.address,
        findMenu.restaurant.number,
        findMenu.restaurant.complement,
        findMenu.restaurant.district,
        findMenu.restaurant.file,
      )

      const menu = new Menu(
        findMenu.id,
        findMenu.name,
        findMenu.description,
        findMenu.price,
        findMenu.file,
        restaurant, // Passe o objeto Restaurant em vez de restaurantId
      )

      return menu
    })

    return menus
  }
}

export const MenuRepositoryProvider = {
  provide: MenuRepositoryInterface,
  useClass: MenuRepository,
}
