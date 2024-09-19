import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { ClientRepositoryProvider } from './infrastructure/repository/clients.repository'
import { PrismaService } from './infrastructure/database/prisma.service'
import { ClientController } from './infrastructure/controllers/client.controller'
import { CreateClientUseCaseProvider } from './application/use-cases/client/create/create.client.usecase'
import { JwtServiceProvider } from './infrastructure/auth/jwt.service'
import { AuthModule } from './infrastructure/auth/auth.module'
import { FindClientUseCaseProvider } from './application/use-cases/client/find/find.client.usecase'
import { FindAllClientUseCaseProvider } from './application/use-cases/client/findAll/findAll.client.usecase'
import { UpdateClientUseCaseProvider } from './application/use-cases/client/update/update.client.usecase'
import { FindEmailClientUseCaseProvider } from './application/use-cases/client/findEmail/findEmail.client.usecase'
import { BcryptServiceProvider } from './infrastructure/auth/bcrypt.service'
import { MenuRepositoryProvider } from './infrastructure/repository/menu.repository'
import { CreateMenuUseCaseProvider } from './application/use-cases/menu/create/create.menu.usecase'
import { FindAllMenuUseCaseProvider } from './application/use-cases/menu/findAll/findAll.menu.usecase'
import { FindMenuUseCaseProvider } from './application/use-cases/menu/find/find.menu.usecase'
import { FindRestaurantMenuUseCaseProvider } from './application/use-cases/menu/findRestaurant/findRestaurant.menu.usecase'
import { UpdateMenuUseCaseProvider } from './application/use-cases/menu/update/update.menu.usecase'
import { RestaurantRepositoryProvider } from './infrastructure/repository/restaurant.repository'
import { CreateRestaurantUseCaseProvider } from './application/use-cases/restaurant/create/create.restaurant.usecase'
import { FindRestaurantUseCaseProvider } from './application/use-cases/restaurant/find/find.restaurant.usecase'
import { FindAllRestaurantUseCaseProvider } from './application/use-cases/restaurant/findAll/findAll.restaurant.usecase'
import { UpdateRestaurantUseCaseProvider } from './application/use-cases/restaurant/update/update.restaurant.usecase'
import { MenuController } from './infrastructure/controllers/menu.controller'
import { RestaurantController } from './infrastructure/controllers/restaurant.controller'
import { AuthenticateController } from './infrastructure/controllers/authenticate.controller'
import { AuthenticationUseCaseProvider } from './application/use-cases/auth/authenticate.client.usecase'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    AuthenticateController,
    ClientController,
    MenuController,
    RestaurantController,
  ],
  providers: [
    PrismaService,
    JwtServiceProvider,
    BcryptServiceProvider,
    AuthenticationUseCaseProvider,
    ClientRepositoryProvider,
    CreateClientUseCaseProvider,
    FindClientUseCaseProvider,
    FindAllClientUseCaseProvider,
    UpdateClientUseCaseProvider,
    FindEmailClientUseCaseProvider,
    MenuRepositoryProvider,
    CreateMenuUseCaseProvider,
    FindMenuUseCaseProvider,
    FindAllMenuUseCaseProvider,
    FindRestaurantMenuUseCaseProvider,
    UpdateMenuUseCaseProvider,
    RestaurantRepositoryProvider,
    CreateRestaurantUseCaseProvider,
    FindRestaurantUseCaseProvider,
    FindAllRestaurantUseCaseProvider,
    UpdateRestaurantUseCaseProvider,
  ],
})
export class AppModule {}
