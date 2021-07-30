import { ThemeProvider } from '@material-ui/core';
import Login from 'components/Login';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import theme from 'theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
