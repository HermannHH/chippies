import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Well from '../Well';
import ProgressiveImage from '../ProgressiveImage';
import Heading from '../Heading';
import Pad from '../Pad';
import VerticalMiddle from '../VerticalMiddle';

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
`;

const HeadingContainer = styled.div`
  display: inline-block;
`;

const ActionsContainer = styled.div`
  display: inline-block;
  position: absolute;
  right: 0px;
  border: thin solid blue;
`;

/**
 * Component that displays a LineItem in an interactive way, meaning that the user can change quantities, add discounts etc
 */

function InteractiveLineItem({
  imgSrc,
  title,
}) {
  return (
    <Well>
      <VerticalMiddle>
        <ImageContainer>
          <ProgressiveImage src={imgSrc} rounded />
        </ImageContainer>
        <HeadingContainer>
          <Pad horizontal={{ xs: 4 }}>
            <Heading text={title} size="4" withMargin={false} />
          </Pad>
        </HeadingContainer>
        <ActionsContainer>
            Hello
        </ActionsContainer>
      </VerticalMiddle>
    </Well>
  );
}

InteractiveLineItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

InteractiveLineItem.defaultProps = {
};

export default InteractiveLineItem;
