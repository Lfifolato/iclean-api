import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class SessionController {
  public async store({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password, {
      expiresIn: '7days',
    })
    let user = await User.findBy('email', email)
    if (!user) {
      return response.send({ error: 'Não localizado' })
    }

    user.token = token.token

    return response.status(201).send(user)
  }

  public async destroy({ auth, response }: HttpContextContract) {
    await auth.logout()

    return response.send('logout')
  }
}
