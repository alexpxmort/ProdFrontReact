    /**
 *Componente de rotas
 * 
 */


import React from   'react';
import {Route,Switch} from 'react-router-dom';
import AddProdPage from '../pages/add';
import ListPage from '../pages/list';
import EditProdPage from '../pages/edit/index'

const  Router  = ()=>(
    <Switch>
        <Route exact component={ListPage} path="/"/>
        <Route  component={AddProdPage} path="/add"/>
        <Route  component={EditProdPage} path="/edit/:id"/>
    </Switch>
)


export default  Router;