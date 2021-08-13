import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Servico from 'App/Models/Servico'
import { StoreValidator, UpdateValidator } from 'App/Validators/Servicos/index'

export default class ServicesController {
  public async index({ response }: HttpContextContract) {
    const services = await Servico.all()

    return response.status(200).send(services)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const services = await Servico.create(data)

    return response.status(201).send(services)
  }

  public async show({ params, response }: HttpContextContract) {
    const services = await Servico.findOrFail(params.id)

    return response.status(200).send(services)
  }

  public async update({ params, response, request }: HttpContextContract) {
    const services = await Servico.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    services.merge(data)

    await services.save()

    return response.status(201).send(data)
  }

  public async destroy({ params }: HttpContextContract) {
    const services = await Servico.findOrFail(params.id)

    services.delete()
  }
}
