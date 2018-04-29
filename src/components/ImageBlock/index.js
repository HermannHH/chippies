import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import Display from '../Display';
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
  width, height, src, position,
}) {
  return (
    <PositionContainer position={position}>
      <Pad
        all={{
            xs: 3,
          }}
      >
        <Image width={width} height={height} src={src} />
      </Pad>
    </PositionContainer>
  );
}

ImageBlock.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  position: PropTypes.oneOf([
    'center',
    'left',
    'right',
  ]),
};

ImageBlock.defaultProps = {
  width: null,
  height: null,
  position: 'center',
};

export default ImageBlock;
