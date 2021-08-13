import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Avatar extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public urlAvatar: string

  @column({ serializeAs: null })
  public user_id: number

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
