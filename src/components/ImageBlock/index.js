import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../Image';
import Pad from '../Pad';


const PositionContainer = styled.div`
    display: block;
    width: 100%;
    position: relative;
    ${props => `
      > div {
          text-align: ${props.position};
      };
      
    `};
`;

/**
 * Used for normal images. Will not be progressive
 */

function ImageBlock({
  width, height, src, position, children,
}) {
  return (
    <PositionContainer position={position}>
      <Pad
        all={{
            xs: 3,
          }}
      >
        {children || <Image width={width} height={height} src={src} />}
      </Pad>
    </PositionContainer>
  );
}

ImageBlock.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
  position: PropTypes.oneOf([
    'center',
    'left',
    'right',
  ]),
  children: PropTypes.element,
};

ImageBlock.defaultProps = {
  width: null,
  height: null,
  position: 'center',
  children: null,
  src: null,
};

export default ImageBlock;
