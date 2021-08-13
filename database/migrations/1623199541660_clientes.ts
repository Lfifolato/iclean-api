import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clientes extends BaseSchema {
  protected tableName = 'clientes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('cpf')
      table.string('telefone')
      table.string('email')
      table.string('cep')
      table.string('cidade')
      table.string('bairro')
      table.string('rua')
      table.string('numero')
      table.string('ddd')
      table.boolean('ativo').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
