import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyles from './styles/global';

import Header from './components/Header/index';

import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}
