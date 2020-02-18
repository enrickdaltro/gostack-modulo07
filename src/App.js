import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import GlobalStyles from './styles/global';

import Header from './components/Header/index';

import Routes from './routes';

import './config/ReactotronConfig';

import store from './store/index';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}
