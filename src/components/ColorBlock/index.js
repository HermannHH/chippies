import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import kratedTheme from 'krated-theme';

const Block = styled.div`
  ${props => `
    width: ${props.width};
    height: ${props.height};
    background-color: ${props.theme.colors[props.color][props.shade]};
    display: block;
    box-sizing: border-box;
  `};
`;

function ColorBlock({
  width, height, color, children, shade, theme,
}) {
  return (
    <Block width={width} height={height} color={color} shade={shade} theme={theme}>
      {children}
    </Block>
  );
}

ColorBlock.propTypes = {
  theme: PropTypes.shape(),
  color: PropTypes.string.isRequired,
  shade: PropTypes.string.isRequired,
  children: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
};

ColorBlock.defaultProps = {
  theme: kratedTheme,
  width: '120px',
  height: '120px',
  children: null,
};

export default ColorBlock;
