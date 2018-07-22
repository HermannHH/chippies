import React from 'react';
import PropTypes from 'prop-types';

import Src from './branded_block_icon.svg';

import Image from '../Image';

function BrandedBlockIcon({ size }) {
  const widths = {
    1: 300,
    2: 200,
    3: 150,
    4: 100,
    5: 80,
    6: 60,
  };
  return <Image src={Src} width={widths[size]} />;
}

BrandedBlockIcon.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
};

BrandedBlockIcon.defaultProps = {
  size: '3',
};

export default BrandedBlockIcon;
