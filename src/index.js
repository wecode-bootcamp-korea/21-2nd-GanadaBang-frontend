import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { GlobalStyle } from './Styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';
import mixin from './Styles/mixin';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme, ...mixin }}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
