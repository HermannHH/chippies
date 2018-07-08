import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageTag = styled.img`
  ${props => `
    width: ${props.width ? `${props.width}px` : 'auto'};
    height: ${props.height ? `${props.height}px` : 'auto'};
    box-sizing: border-box;
  `};
`;

/**
 * Used for normal images. Will not be progressive
 */

function Image({
  width, height, src,
}) {
  return (
    <ImageTag width={width} height={height} src={src} />
  );
}

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  width: null,
  height: null,
};

export default Image;
