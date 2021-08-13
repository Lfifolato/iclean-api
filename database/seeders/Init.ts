import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'
import User from 'App/Models/User'

export default class InitSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      nome: 'Administrador',
      email: 'admin@teste.com.br',
      password: '202020',
    })

    await Cliente.createMany([
      {
        nome: 'Luiz Fifolato',
        cpf: '54545454',
        telefone: '1698852487',
        email: 'luiz@gmail.com',
        cep: '545454',
        cidade: 'ribeirão preto',
        bairro: 'jardim paulistano',
        rua: 'angelo belloni',
        numero: '309',
        ddd: '16',
      },
      {
        nome: 'Pedro silva',
        cpf: '4857878',
        telefone: '1114878787',
        email: 'pedro@gmail.com',
        cep: '15485787',
        cidade: 'sao paulo',
        bairro: 'zona sull',
        rua: 'avenida jabaquara',
        numero: '8754',
        ddd: '11',
      },
    ])
  }
}
