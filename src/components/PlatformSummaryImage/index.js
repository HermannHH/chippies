import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Src from './platform-summary.png';

import Image from '../Image';

function PlatformSummaryImage({ size }) {
  const widths = {
    1: 300,
    2: 200,
    3: 150,
  };
  return <Image src={Src} width="100%" />;
}

PlatformSummaryImage.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3']),
};

PlatformSummaryImage.defaultProps = {
  size: '3',
};

export default PlatformSummaryImage;
