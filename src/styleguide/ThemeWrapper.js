import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../components/helpers/theme';

function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeWrapper;
