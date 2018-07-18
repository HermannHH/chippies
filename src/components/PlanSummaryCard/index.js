import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';
import CardPad from '../CardPad';
import Heading from '../Heading';
import Divider from '../Divider';
import HeadingGroup from '../HeadingGroup';
import Paragraph from '../Paragraph';
import Button from '../Button';

const propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  entityVsTerm: PropTypes.string.isRequired,
  explainer: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  image: PropTypes.element.isRequired,
};
const defaultProps = {};

const CardInnerWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;

function PlanSummaryCard({
  image,
  name,
  amount,
  entityVsTerm,
  explainer,
  buttonText,
  buttonAction,
}) {
  return (
    <Card>
      <CardPad>
        <CardInnerWrapper>
          <ImageWrapper>{image}</ImageWrapper>
          <Heading text={name} size="4" />
          <Divider />
          <HeadingGroup mainText={amount} subText={entityVsTerm} size="4" />
          <Paragraph>{explainer}</Paragraph>
          <Button text={buttonText} handleClick={buttonAction} raised whiteText color="red" />
        </CardInnerWrapper>
      </CardPad>
    </Card>
  );
}

PlanSummaryCard.propTypes = propTypes;
PlanSummaryCard.defaultProps = defaultProps;

export default PlanSummaryCard;
