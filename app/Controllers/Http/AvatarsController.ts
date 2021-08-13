/* eslint-disable @typescript-eslint/naming-convention */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Avatar from 'App/Models/Avatar'
import StoreValidator from 'App/Validators/Avatar/StoreValidator'

import imgbbUploader from 'imgbb-uploader'

import { key } from '../../Services/config'

export default class AvatarsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const imgresponse = await imgbbUploader(key, data.file.tmpPath)
    console.log(imgresponse)
    const urlAvatar = imgresponse.url
    const user_id = data.user_id
    const avatarData = {
      urlAvatar,
      user_id,
    }
    const avatar = await Avatar.create(avatarData)

    return avatar
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
