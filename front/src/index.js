import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import CartStore from './Redux/Store/CartStore';

ReactDOM.render(
  <Provider store={CartStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
