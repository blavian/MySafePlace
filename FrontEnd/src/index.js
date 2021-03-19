import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import configureStore from './redux-store'

import * as sessionActions from './redux-store/session'
import * as notebookActions from './redux-store/notebook'

//Make a store
const store = configureStore();

 //Make redux available in development
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.sessionActions = sessionActions
  window.notebookActions = notebookActions
}


ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
