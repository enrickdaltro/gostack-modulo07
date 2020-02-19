import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

import GlobalStyles from './styles/global';

import Header from './components/Header/index';

import Routes from './routes';

import './config/ReactotronConfig';

import history from './services/history';
import store from './store/index';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={2500} />
      </Router>
    </Provider>
  );
}
