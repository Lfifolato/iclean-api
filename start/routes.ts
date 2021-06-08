import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/session', 'SessionController.store')
Route.delete('/session', 'SessionController.destroy')
