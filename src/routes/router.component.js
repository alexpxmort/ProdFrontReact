import React from   'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import HomePage from '../pages/home';
import ListPage from '../pages/list';

const  Router  = ()=>(
    <Switch>
        <Route exact component={ListPage} path="/"/>
        <Route  component={HomePage} path="/add"/>
        <Route  component={HomePage} path="/edit/:id"/>
    </Switch>
)


export default  Router;