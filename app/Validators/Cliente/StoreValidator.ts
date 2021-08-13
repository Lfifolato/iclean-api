import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// table.string('nome')
//       table.string('cpf')
//       table.string('telefone')
//       table.string('email')
//       table.string('cep')
//       table.string('cidade')
//       table.string('bairro')
//       table.string('rua')
//       table.string('numero')
//       table.string('ddd')
//       table.boolean('ativo').defaultTo(true)
export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    cpf: schema.string({ trim: true }, [rules.unique({ table: 'clientes', column: 'cpf' })]),
    telefone: schema.string({ trim: true }, [
      rules.unique({ table: 'clientes', column: 'telefone' }),
    ]),
    email: schema.string({ trim: true }, [
      rules.unique({ table: 'clientes', column: 'cpf' }),
      rules.email(),
    ]),
    cep: schema.string({ trim: true }),
    cidade: schema.string({ trim: true }),
    bairro: schema.string({ trim: true }),
    rua: schema.string({ trim: true }),
    numero: schema.string({ trim: true }),
    ddd: schema.string({ trim: true }),
  })

  public messages = {
    required: '{{ field }} parâmetro Obrigatório ',
    unique: '{{ field }} ja cadastrado',
    email: 'E-mail invalido',
  }
}
