import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { start: 'IClean - api' }
})

Route.post('/session', 'SessionController.store')
Route.delete('/session', 'SessionController.destroy')

Route.resource('/user', 'UsersController').apiOnly()
Route.resource('/cliente', 'ClientesController').apiOnly()
Route.group(() => {
  Route.resource('/service', 'ServicesController').apiOnly()
  Route.resource('/avatar', 'AvatarsController').apiOnly()
}).middleware('auth')

Route.get('/cliente-cadastrado', async ({ view }) => {
  return view.render('emails/cadastrado')
})
