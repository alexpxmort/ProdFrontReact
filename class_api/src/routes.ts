import { Router, Request, Response } from 'express';
import { AuthController } from './controller/AuthController';
import { ClassController } from './controller/ClassControler';
import { CommentController } from './controller/CommentController';

const routes = Router();
const authController = new AuthController();
const classController = new ClassController();
const commentsController = new CommentController();



routes.get('/test', (req:Request, resp:Response) => resp.json({ msg: "It's works!! " }));

routes.post('/users', async (req:Request, resp:Response) => {
	return  await authController.authenticate(req,resp);
} );

routes.post('/classes',async (req:Request, resp:Response) => {
	return  await classController.create(req,resp);
} );


routes.post('/classes/comments',async (req:Request, resp:Response) => {
	return  await commentsController.create(req,resp);
} );


routes.get('/classes/:id',async (req:Request, resp:Response) => {
	return  await classController.get(req,resp);
} );


routes.delete('/classes/:id',async (req:Request, resp:Response) => {
	return  await classController.remove(req,resp);
} );

export default routes;
