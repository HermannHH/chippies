import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Src from './special-powered-by-krated-3.png';

import Image from '../Image';


function PoweredByKrated({
  size,
}) {
  const widths = {
    1: 300,
    2: 200,
    3: 150,
  };
  return (
    <a href="https://krated.com" target="_blank" rel="noopener noreferrer"><Image src={Src} width={widths[size]} /></a>
  );
}

PoweredByKrated.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3']),
};

PoweredByKrated.defaultProps = {
  size: '3',
};

export default PoweredByKrated;
