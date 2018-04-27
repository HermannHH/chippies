import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeWrapper;
