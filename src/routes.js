import React from 'react';
import {Route} from 'react-router-dom';
import UUIDBuilder from './pages/uuid';
import ProductCodeComponent from './pages/product';
import Welcome from './pages/Welcome';
export default (
    <div className="container">
        <Route exact path="/" component={Welcome}/>
        <Route  path="/uuid" component={UUIDBuilder}/>
        <Route  path="/product" component={ProductCodeComponent}/>
    </div>
)