import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Src from './branded_mixed_logo.svg';

import Image from '../Image';


function BrandedMixedLogo({
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

BrandedMixedLogo.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3']),
};

BrandedMixedLogo.defaultProps = {
  size: '3',
};

export default BrandedMixedLogo;
