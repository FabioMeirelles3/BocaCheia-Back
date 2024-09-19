import { Controller, Post, Body } from '@nestjs/common'
import { IAuthUseCase } from '../../application/interfaces/auth/auth.usecase.interface'
import { InputAuthenticateClientDto } from '../../application/use-cases/auth/authenticate.client.dto'

@Controller('sessions')
export class AuthenticateController {
  constructor(private readonly authenticationClientUseCase: IAuthUseCase) {}

  @Post()
  async authentication(
    @Body() authenticationClientDto: InputAuthenticateClientDto,
  ) {
    return this.authenticationClientUseCase.execute(authenticationClientDto)
  }
}
