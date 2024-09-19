import { Injectable, UnauthorizedException } from '@nestjs/common'
import { IAuthUseCase } from '../../interfaces/auth/auth.usecase.interface'
import { ClientRepositoryInterface } from '../../interfaces/client/client-repository.interface'
import { IBcryptService } from '../../../infrastructure/auth/interfaces/bcrypt.interface'
import { IJwtService } from '../../../infrastructure/auth/interfaces/jwt.interface'
import {
  InputAuthenticateClientDto,
  OutputAuthenticateClientDto,
} from './authenticate.client.dto'

@Injectable()
export default class AuthenticationUseCase implements IAuthUseCase {
  constructor(
    private readonly clientRepository: ClientRepositoryInterface,
    private readonly bcryptService: IBcryptService,
    private readonly jwtService: IJwtService,
  ) {}

  async execute(
    input: InputAuthenticateClientDto,
  ): Promise<OutputAuthenticateClientDto> {
    const findClientLogin = await this.clientRepository.findByEmail(input.email)

    if (!findClientLogin) {
      throw new UnauthorizedException('User credentials do not match.')
    }

    const isPasswordValid = await this.bcryptService.compare(
      input.password,
      findClientLogin.password,
    )

    if (!isPasswordValid) {
      throw new UnauthorizedException('User credentials do not match.')
    }

    const accessToken = this.jwtService.createToken(findClientLogin.id)

    return {
      access_token: accessToken,
    }
  }
}

export const AuthenticationUseCaseProvider = {
  provide: IAuthUseCase,
  useClass: AuthenticationUseCase,
}
