import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class InitSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      nome: 'Administrador',
      email: 'admin@teste.com.br',
      password: '202020',
    })
  }
}
