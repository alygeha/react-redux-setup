import 'babel-polyfill'; //in real app case , use only the polyfill that you need, babel-polyfill transpile some special syntax such as routes
import React from 'react';
import { render } from 'react-dom'; //in react.14 react-DOM was split off from React, we need here to use render function
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

//NB : render as a function here with 2 params
render (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>,
      document.getElementById('app')
);
