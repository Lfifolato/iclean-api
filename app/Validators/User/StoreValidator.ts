import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// able.string('nome')
//       table.string('email', 255).notNullable()
//       table.string('password', 180).notNullable()

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({ trim: true }, [rules.minLength(6)]),
  })

  public messages = {
    required: '{{ field }} parâmetro Obrigatório ',
    unique: '{{ field }} ja cadastrado',
    email: 'E-mail invalido',
    minLength: 'Senha deve conter pelo menos 8 carácter',
  }
}
