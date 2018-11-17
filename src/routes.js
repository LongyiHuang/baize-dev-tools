import React from 'react';
import {Route} from 'react-router-dom';
import UUIDBuilder from './pages/uuid';
import ProductCodeComponent from './pages/product';
export default (
    <div className="container">
        <Route exact path="/uuid" component={UUIDBuilder}/>
        <Route exact path="/product" component={ProductCodeComponent}/>
    </div>
)