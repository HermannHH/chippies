import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProgressiveImage from '../ProgressiveImage';

const CardCoverWrapper = styled.div`
  width: 100%;
`;

function CardCover({ src }) {
  return (
    <CardCoverWrapper>
      <ProgressiveImage
        height="200px"
        src={src}
      />
    </CardCoverWrapper>
  );
};

CardCover.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CardCover;