import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import QuestionController from './app/controllers/QuestionController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.get('/questions/:step', QuestionController.index);

routes.post('/sessions', SessionController.store);

// routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
