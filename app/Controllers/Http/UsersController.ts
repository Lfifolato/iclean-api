import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { StoreValidator, UpdateValidator } from 'App/Validators/User/index'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const data = await User.query().preload('avatar')

    return response.status(200).send(data)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await User.create(data)

    return response.status(201).send(user)
  }

  public async show({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    user.load('avatar')

    return response.status(201).send(user)
  }

  public async update({ request, params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    user.merge(data)

    await user.save()

    return response.status(201).send(user)
  }

  public async destroy({ response, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    user.delete()

    return response.status(204).send({ mensagem: 'Usuário deletado' })
  }
}
