/**
 *Componente de rotas
 *
 */


import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddCompanyPage from '../pages/add/AddCompany';
import DetailCompanyPage from '../pages/detail/DetailCompany';
import EditCompanyPage from '../pages/edit/EditCompany';
import ListCompaniesPage from '../pages/list/ListCompanies';

const Router:React.FC = () => (
	<Switch>
		<Route exact component={ListCompaniesPage} path="/" />
		<Route component={AddCompanyPage} path="/add" />
		<Route component={DetailCompanyPage} path="/company/detail/:id" />
		<Route component={EditCompanyPage} path="/company/edit/:id" />
	</Switch>
);


export default Router;
