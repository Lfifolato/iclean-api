import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import { StoreValidator, UpdateValidator } from 'App/Validators/Cliente/index'
import mail from '@ioc:Adonis/Addons/Mail'

export default class ClientesController {
  public async index({ response }: HttpContextContract) {
    const clientes = await Cliente.all()

    return response.status(200).send(clientes)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const cliente = await Cliente.create(data)
    const nome = data.nome
    mail.send((massage) => {
      massage.to(data.email)
      massage.from('contato@iclean.com', 'I-clean')
      massage.subject('Boas vindas I-clean')
      massage.htmlView('emails/cadastrado', { nome })
    })

    return response.status(201).send(cliente)
  }

  public async show({ params, response }: HttpContextContract) {
    const clientes = await Cliente.findOrFail(params.id)

    return response.status(200).send(clientes)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    cliente.merge(data)

    await cliente.save()

    return response.status(201).send(cliente)
  }

  public async destroy({ params }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)

    cliente.delete()
  }
}
