import React from 'react';
import { createRoot } from 'react-dom/client';

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


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
