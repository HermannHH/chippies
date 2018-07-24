import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import requiredIf from 'react-required-if';

import Card from '../Card';
import CardPad from '../CardPad';
import Heading from '../Heading';
import Divider from '../Divider';
import HeadingGroup from '../HeadingGroup';
import Paragraph from '../Paragraph';
import Button from '../Button';
import Label from '../Label';
import Mrg from '../Mrg';

const propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string,
  entityVsTerm: PropTypes.string,
  explainer: PropTypes.string.isRequired,
  buttonText: requiredIf(PropTypes.string, props => props.amount && props.entityVsTerm),
  buttonAction: requiredIf(PropTypes.func, props => props.amount && props.entityVsTerm),
  waitingButtonText: requiredIf(PropTypes.string, props => !props.amount && !props.entityVsTerm),
  waitingButtonAction: requiredIf(PropTypes.func, props => !props.amount && !props.entityVsTerm),
  image: PropTypes.element.isRequired,
};
const defaultProps = {
  amount: null,
  entityVsTerm: null,
  waitingButtonAction: null,
  waitingButtonText: null,
  buttonAction: null,
  buttonText: null,
};

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
  waitingButtonText,
  waitingButtonAction,
}) {
  const isActive = amount && entityVsTerm;
  return (
    <Card>
      <CardPad>
        <CardInnerWrapper>
          <ImageWrapper>{image}</ImageWrapper>
          <Heading text={name} size="4" />
          <Divider />
          {isActive ? (
            <HeadingGroup mainText={amount} subText={entityVsTerm} size="4" />
          ) : (
            <Mrg top={{ xs: 5 }} bottom={{ xs: 5 }}>
              <Label
                text="Coming soon"
                backgroundColor="grey"
                backgroundShade="-1"
                color="white"
                shade="0"
              />
            </Mrg>
          )}
          <Paragraph>{explainer}</Paragraph>
          {isActive ? (
            <Button text={buttonText} handleClick={buttonAction} raised whiteText color="red" />
          ) : (
            <Button text={waitingButtonText} handleClick={waitingButtonAction} />
          )}
        </CardInnerWrapper>
      </CardPad>
    </Card>
  );
}

PlanSummaryCard.propTypes = propTypes;
PlanSummaryCard.defaultProps = defaultProps;

export default PlanSummaryCard;
