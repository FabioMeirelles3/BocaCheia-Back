export abstract class IJwtService {
  abstract checkToken(token: string): Promise<any>
  abstract createToken(sub: string): string
}
