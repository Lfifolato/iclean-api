import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column()
  public cep: string

  @column()
  public cidade: string

  @column()
  public bairro: string

  @column()
  public rua: string

  @column()
  public numero: string

  @column()
  public ddd: string

  @column()
  public ativo: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
