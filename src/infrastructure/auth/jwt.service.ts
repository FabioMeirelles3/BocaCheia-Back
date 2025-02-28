import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { IJwtService } from './interfaces/jwt.interface'

@Injectable()
export class JwtTokenService implements IJwtService {
  constructor(private readonly jwtService: JwtService) {}

  async checkToken(token: string): Promise<any> {
    const decode = await this.jwtService.verifyAsync(token)
    return decode
  }

  createToken(sub: string): string {
    return this.jwtService.sign({ sub: sub })
  }
}

export const JwtServiceProvider = {
  provide: IJwtService,
  useClass: JwtTokenService,
}
