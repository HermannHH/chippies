import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import ImageBlock from '../ImageBlock';
import BrandedMixedLogo from '../BrandedMixedLogo';


function BrandHeader({
  size,
  position,
}) {
  return (
    <ImageBlock position={position}>
      <BrandedMixedLogo size={size} />
    </ImageBlock>
  );
}

BrandHeader.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3']),
  position: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
};

BrandHeader.defaultProps = {
  size: '3',
  position: 'center',
};

export default BrandHeader;
