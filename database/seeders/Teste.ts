import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UserFactory } from 'Database/factories'

export default class TesteSeeder extends BaseSeeder {
  public async run() {
    await UserFactory.createMany(60000)
  }
}
