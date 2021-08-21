/**
 *Componente de rotas
 *
 */


import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddCompanyPage from '../pages/add/AddCompany';

const Router:React.FC = () => (
		 <Switch>
				 <Route component={AddCompanyPage} path="/" />
		 </Switch>
);


export default Router;
