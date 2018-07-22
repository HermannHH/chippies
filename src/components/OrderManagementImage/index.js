import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Src from './notification_image.png';

import Image from '../Image';

function OrderManagementImage({ size }) {
  const widths = {
    1: 300,
    2: 200,
    3: 150,
  };
  return <Image src={Src} width="100%" />;
}

OrderManagementImage.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3']),
};

OrderManagementImage.defaultProps = {
  size: '3',
};

export default OrderManagementImage;
