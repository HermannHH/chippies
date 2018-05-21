import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Well from '../Well';
import ProgressiveImage from '../ProgressiveImage';
import Heading from '../Heading';
import Pad from '../Pad';
import VerticalMiddle from '../VerticalMiddle';
import NumericSpin from '../NumericSpin';

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
`;

/**
 * Component that displays a LineItem in an interactive way, meaning that the user can change quantities, add discounts etc
 */

function InteractiveLineItem({
  id,
  src,
  title,
  handleClickChange,
  handleTypingChange,
  value,
}) {
  return (
    <Well>
      <VerticalMiddle>
        <ImageContainer>
          <ProgressiveImage src={src} rounded />
        </ImageContainer>
        <HeadingContainer>
          <Pad horizontal={{ xs: 4 }}>
            <Heading text={title} size="4" withMargin={false} />
          </Pad>
        </HeadingContainer>
        <ActionsContainer>
          <NumericSpin
            handleClickChange={handleClickChange}
            handleTypingChange={handleTypingChange}
            value={value}
            id={id}
          />
        </ActionsContainer>
      </VerticalMiddle>
    </Well>
  );
}

InteractiveLineItem.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClickChange: PropTypes.func.isRequired,
  handleTypingChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

InteractiveLineItem.defaultProps = {
};

export default InteractiveLineItem;
