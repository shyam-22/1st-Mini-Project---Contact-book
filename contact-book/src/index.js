import React from 'react';
import ReactDOM from 'react-dom';
import "./Style_Folder/index.scss"

import App from './App';
import { Provider } from "react-redux";
import Store from "./Store";

ReactDOM.render(
  <Provider store = {Store}>
     <App />
  </Provider>,
  document.getElementById('root')
);


