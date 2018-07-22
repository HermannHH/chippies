import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Src from './catalogue_image.png';

import Image from '../Image';

function ProductManagementImage({ size }) {
  const widths = {
    1: 300,
    2: 200,
    3: 150,
  };
  return <Image src={Src} width="100%" />;
}

ProductManagementImage.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3']),
};

ProductManagementImage.defaultProps = {
  size: '3',
};

export default ProductManagementImage;
