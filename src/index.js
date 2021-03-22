import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk'
import './index.css';
import App from './App';
import combineReducers from './state/combineReducers';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(combineReducers,composeEnhancers(applyMiddleware(reduxThunk)));

  ReactDOM.render(
    <Provider store={store}>
          <App />
    </Provider>,
    document.getElementById('root')
  );

