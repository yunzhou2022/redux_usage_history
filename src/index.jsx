import React from 'react';
import { createRoot } from 'react-dom/client';
import {applyMiddleware, compose, createStore} from 'redux';
import App from './App.jsx';
import rootReducer from './store/reducers.js';
import { ReduxContext } from './context.js';

function thunk({ dispatch, getState }) {
  return next=>action=>{
    if(typeof action ==='function'){
      return action(dispatch, getState);
    }
    return next(action);
  }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ReduxContext.Provider value={store}>
    <App />
  </ReduxContext.Provider>
)