import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Shevy from 'shevyjs';

import Heading from '../Heading';
import Paragraph from '../Paragraph';

const shevy = new Shevy();
const {
  h1, h2, h3, h4, h5, h6,
} = shevy;

const Container = styled.div`
    ${props => `
        margin: 0px;
        ${props.withMargin && props.size === '1' && `margin: ${h1.marginBottom} 0px`};
        ${props.withMargin && props.size === '2' && `margin: ${h2.marginBottom} 0px`};
        ${props.withMargin && props.size === '3' && `margin: ${h3.marginBottom} 0px`};
        ${props.withMargin && props.size === '4' && `margin: ${h4.marginBottom} 0px`};
        ${props.withMargin && props.size === '5' && `margin: ${h5.marginBottom} 0px`};
        ${props.withMargin && props.size === '6' && `margin: ${h6.marginBottom} 0px`};
    `};
`;

function HeadingGroup({
  size, mainText, subText, withMargin,
}) {
  return (
    <Container withMargin={withMargin} size={size}>
      <Heading text={mainText} size={size} withMargin={false} />
      <Paragraph withMargin={false}>{subText}</Paragraph>
    </Container>
  );
}

HeadingGroup.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  withMargin: PropTypes.bool,
};

HeadingGroup.defaultProps = {
  size: '3',
  withMargin: true,
};

export default HeadingGroup;
