
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStroe from './store/configureStore';
import {BrowserRouter as Router} from 'react-router-dom';

import Home from "./pages/Home";
const store = configureStroe();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Home/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
