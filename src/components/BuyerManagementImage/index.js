import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Src from './buyer_image.png';

import Image from '../Image';

function BuyerManagementImage({ size }) {
  const widths = {
    1: 300,
    2: 200,
    3: 150,
  };
  return <Image src={Src} width="100%" />;
}

BuyerManagementImage.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3']),
};

BuyerManagementImage.defaultProps = {
  size: '3',
};

export default BuyerManagementImage;
