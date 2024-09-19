import { Client } from '../../../domain/entity/clients.entity'
import { RepositoryInterface } from '../repository.interface'

export abstract class ClientRepositoryInterface extends RepositoryInterface<Client> {
  abstract findByEmail(email: string): Promise<Client>
}
