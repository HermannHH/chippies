import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fa from './fontawesome';

// import { shevyConfig } from '../helpers';

// const shevy = new Shevy(shevyConfig);
// const {
//   content,
// } = shevy;

function Icon({
  theme, icon, color, shade, size,
}) {
  return <FontAwesomeIcon icon={fa[icon]} color={theme.colors[color][shade]} size={size} />;
}

Icon.propTypes = {
  theme: PropTypes.shape(),
  icon: PropTypes.oneOf(['faPlus', 'faTimes', 'faFacebookSquare', 'faTwitter', 'faCheckCircle'])
    .isRequired,
  color: PropTypes.string,
  shade: PropTypes.string,
  size: PropTypes.oneOf([
    'lg',
    'xs',
    'sm',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
};

Icon.defaultProps = {
  theme: kratedTheme,
  color: 'grey',
  shade: '0',
  size: 'sm',
};

export default Icon;
