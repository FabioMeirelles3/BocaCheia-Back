import { Injectable } from '@nestjs/common'
import { compare, hash } from 'bcryptjs'
import { IBcryptService } from './interfaces/bcrypt.interface'

@Injectable()
export class BcryptService implements IBcryptService {
  rounds: number = 10

  async hash(hashString: string): Promise<string> {
    return await hash(hashString, this.rounds)
  }

  async compare(password: string, hashPassword: string): Promise<boolean> {
    return await compare(password, hashPassword)
  }
}

export const BcryptServiceProvider = {
  provide: IBcryptService,
  useClass: BcryptService,
}
