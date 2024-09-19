import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common'
import { ICreateClientUseCase } from '../../application/interfaces/client/createClient.usecase.interface'
import { IFindClientUseCase } from '../../application/interfaces/client/findClient.usecase.interface'
import { IFindAllClientUseCase } from '../../application/interfaces/client/findAllClient.usecase.interface'
import { IUpdateClientUseCase } from '../../application/interfaces/client/updateClient.usecase.interface'
import { InputCreateClientDto } from '../../application/use-cases/client/create/create.client.dto'
import { InputUpdateClientDto } from '../../application/use-cases/client/update/update.client.dto'
import { InputFindClientDto } from '../../application/use-cases/client/find/find.client.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('clients')
export class ClientController {
  constructor(
    private readonly createClientUseCase: ICreateClientUseCase,
    private readonly findClientUseCase: IFindClientUseCase,
    private readonly findAllClientUseCase: IFindAllClientUseCase,
    private readonly updateClientUseCase: IUpdateClientUseCase,
  ) {}

  @Post()
  async create(@Body() createClientDto: InputCreateClientDto) {
    return this.createClientUseCase.execute(createClientDto)
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async update(@Body() updateClientDto: InputUpdateClientDto) {
    return this.updateClientUseCase.execute(updateClientDto)
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: InputFindClientDto) {
    return this.findClientUseCase.execute(id)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.findAllClientUseCase.execute({})
  }
}
