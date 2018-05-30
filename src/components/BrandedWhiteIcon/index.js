import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Src from './branded_white_icon.svg';

import Image from '../Image';


function BrandedWhiteIcon({
  size,
}) {
  const widths = {
    1: 300,
    2: 200,
    3: 150,
  };
  return (
    <Image src={Src} width={widths[size]} />
  );
}

BrandedWhiteIcon.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3']),
};

BrandedWhiteIcon.defaultProps = {
  size: '3',
};

export default BrandedWhiteIcon;
