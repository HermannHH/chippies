import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import CardPad from '../CardPad';
import HeadingGroup from '../HeadingGroup';
import ProgressiveImage from '../ProgressiveImage';

const propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
const defaultProps = {};

function FeatureSummaryCard({ imgSrc, mainText, subText }) {
  return (
    <Card>
      <CardPad>
        <ProgressiveImage width="80px" height="80px" src={imgSrc} />
      </CardPad>
      <CardPad>
        <HeadingGroup size="5" mainText={mainText} subText={subText} withMargin={false} />
      </CardPad>
    </Card>
  );
}

FeatureSummaryCard.propTypes = propTypes;
FeatureSummaryCard.defaultProps = defaultProps;

export default FeatureSummaryCard;
