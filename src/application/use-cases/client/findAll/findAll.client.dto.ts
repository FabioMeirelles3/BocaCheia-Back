export interface InputFindAllClientDto {}

type Client = {
  id: string
  name: string
  email: string
  file: string
}

export interface OutputFindAllClientDto {
  clients: Client[]
}
