import React from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';

export default function viewPort(WrappedComponent) {
  function ViewPort(props) {
    return (<WrappedComponent {...props} />);
  }

  const mapSizesToProps = ({ width, height }) => {
    let device = 'phone';
    if (width >= 1200) {
      device = 'large_desktop';
    } else if (width >= 992) {
      device = 'desktop';
    } else if (width >= 768) {
      device = 'tablet';
    } else if (width >= 576) {
      device = 'landscape_phone';
    }

    return (
      {
        width,
        height,
        device,
      }
    );
  };

  ViewPort.propTypes = {
    device: PropTypes.oneOf([
      'phone',
      'large_desktop',
      'desktop',
      'tablet',
      'landscape_phone',
    ]).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  return withSizes(mapSizesToProps)(ViewPort);
}