import React from   'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import HomePage from '../pages/home';
import ListPage from '../pages/list';

const  Router  = ()=>(
    <Switch>
        <Route exact component={HomePage} path="/"/>
        <Route  component={ListPage} path="/list"/>
    </Switch>
)


export default  Router;