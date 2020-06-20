import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

const Application = (
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);

ReactDOM.render(Application, document.getElementById('root'));
module.hot && module.hot.accept();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
