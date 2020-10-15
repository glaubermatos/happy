import { request, Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router();

//  métodos comuns -> index, show, create, update e delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);

export default routes;