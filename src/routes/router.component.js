import React from   'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import HomePage from '../pages/home';

const  Router  = ()=>(
    <Switch>
        <Route exact component={HomePage} path="/"/>
    </Switch>
)


export default  Router;