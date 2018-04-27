import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Block = styled.div`
  ${props => `
    width: ${props.width}px;
    height: ${props.width}px;
    background-color: ${props.hex};
    display: block;
  `};
`;

function ColorBlock({
  width, height, hex, children,
}) {
  return (
    <Block width={width} height={height} hex={hex}>
      {children}
    </Block>
  );
}

ColorBlock.propTypes = {
  hex: PropTypes.string.isRequired,
  children: PropTypes.element,
  width: PropTypes.number,
  height: PropTypes.number,
};

ColorBlock.defaultProps = {
  width: 120,
  height: 120,
  children: null,
};

export default ColorBlock;
