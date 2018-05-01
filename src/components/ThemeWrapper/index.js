import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'krated-theme';

/**
 * Injects the Krated theme found here (https://github.com/HermannHH/krated-theme) into components. Can roll own theme wrapper if theme change is required
 */

function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

ThemeWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};


export default ThemeWrapper;
