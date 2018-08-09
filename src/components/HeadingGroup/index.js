import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';

import Heading from '../Heading';
import Paragraph from '../Paragraph';


import shevyConfig from '../shevyConfig';

const shevy = new Shevy(shevyConfig);
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
  size, mainText, subText, withMargin, white
}) {
  return (
    <Container withMargin={withMargin} size={size}>
      <Heading text={mainText} size={size} withMargin={false} color={white ? "white" : "black"} />
      <Paragraph withMargin={false} color={white ? "white" :"grey"} shade={white ? "0" : "2"}>{subText}</Paragraph>
    </Container>
  );
}

HeadingGroup.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  withMargin: PropTypes.bool,
  white: PropTypes.bool,
};

HeadingGroup.defaultProps = {
  size: '3',
  withMargin: true,
  white: false,
};

export default HeadingGroup;
