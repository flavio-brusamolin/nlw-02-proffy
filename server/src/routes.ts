import { Router } from 'express'
import ClassController from './controllers/class-controller'
import ConnectionController from './controllers/connection-controller'

const routes = Router()

const classController = new ClassController()
const connectionController = new ConnectionController()

routes.get('/classes', classController.index)
routes.post('/classes', classController.create)

routes.get('/connections', connectionController.index)
routes.post('/connections', connectionController.create)

export default routes
