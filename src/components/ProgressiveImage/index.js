import React from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';

const propTypes = {
  rounded: PropTypes.bool,
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.oneOf(['cover', 'contain']),
};
const defaultProps = {
  rounded: false,
  height: '100%',
  width: '100%',
  size: 'cover',
};

/**
 * Progressive image uses css background to cover or contain given div with src image
 */

function ProgressiveImage({
  height, width, rounded, size, src,
}) {
  return (
    <FlexView
      style={{
        height: `${height}`,
        width: `${width}`,
        borderRadius: `${rounded && '50%'}`,
        backgroundColor: 'inherit',
        backgroundSize: size,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${src})`,
      }}
    />
  );
}

ProgressiveImage.propTypes = propTypes;

ProgressiveImage.defaultProps = defaultProps;

export default ProgressiveImage;
