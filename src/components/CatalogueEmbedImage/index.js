import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Src from './catalogue_embed.png';

import Image from '../Image';

function CatalogueEmbedImage({ size }) {
  const widths = {
    1: 300,
    2: 200,
    3: 150,
  };
  return <Image src={Src} width="100%" />;
}

CatalogueEmbedImage.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3']),
};

CatalogueEmbedImage.defaultProps = {
  size: '3',
};

export default CatalogueEmbedImage;
