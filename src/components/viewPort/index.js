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

    const tabletAndUp = ['tablet', 'desktop', 'large_desktop'].includes(device);
    const desktopAndUp = ['desktop', 'large_desktop'].includes(device);
    const phone = ['landscape_phone', 'phone'].includes(device);

    return (
      {
        width,
        height,
        device,
        tabletAndUp,
        desktopAndUp,
        phone,
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
    tabletAndUp: PropTypes.bool.isRequired,
    desktopAndUp: PropTypes.bool.isRequired,
    phone: PropTypes.bool.isRequired,
  };

  return withSizes(mapSizesToProps)(ViewPort);
}
