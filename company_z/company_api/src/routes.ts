import { Router, Request, Response } from 'express';
import { getCompanies, saveCompany } from './controller/CompanyConroller';

const routes = Router();

routes.get('/test', (req:Request, resp:Response) => resp.json({ msg: "It's works!! " }));

routes.get('/companies', getCompanies);
routes.post('/companies', saveCompany);

export default routes;
