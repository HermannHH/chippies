import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import kratedTheme from 'krated-theme';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  theme: PropTypes.shape({}),
};
const defaultProps = {
  theme: kratedTheme,
};

const BlurWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.95;
  filter: blur(5px);
  z-index: 9;
  overflow: hidden;
  ${props => `
    background-color: ${props.theme.colors.grey['-2']};
  `};
`;

function BlurOverlay({ children, theme }) {
  return <BlurWrapper theme={theme}>{children}</BlurWrapper>;
}

BlurOverlay.propTypes = propTypes;
BlurOverlay.defaultProps = defaultProps;

export default BlurOverlay;
