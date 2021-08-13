import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional({ trim: true }),
    cpf: schema.string.optional({ trim: true }, [
      rules.unique({ table: 'clientes', column: 'cpf' }),
    ]),
    telefone: schema.string.optional({ trim: true }),
    email: schema.string.optional({ trim: true }, [rules.email()]),
    cep: schema.string.optional({ trim: true }),
    cidade: schema.string.optional({ trim: true }),
    bairro: schema.string.optional({ trim: true }),
    rua: schema.string.optional({ trim: true }),
    numero: schema.string.optional({ trim: true }),
    ddd: schema.string.optional({ trim: true }),
  })

  public messages = {
    email: 'E-mail invalido',
  }
}
