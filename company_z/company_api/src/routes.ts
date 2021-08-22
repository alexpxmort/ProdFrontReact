import { Router, Request, Response } from 'express';
import { deleteCompany, findById, getCompanies, saveCompany, updateCompany } from './controller/CompanyConroller';

const routes = Router();

routes.get('/test', (req:Request, resp:Response) => resp.json({ msg: "It's works!! " }));

routes.get('/companies', getCompanies);
routes.get('/companies/:id', findById);
routes.delete('/companies/:id',deleteCompany);
routes.put('/companies/:id',updateCompany);
routes.post('/companies', saveCompany);

export default routes;
