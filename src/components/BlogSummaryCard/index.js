import React from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';

import Card from '../Card';
import CardPad from '../CardPad';
import ProgressiveImage from '../ProgressiveImage';
import HeadingGroup from '../HeadingGroup';
import CardActions from '../CardActions';
import Button from '../Button';
import viewPort from '../viewPort';

const propTypes = {
  imgSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  contentSummary: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  desktopAndUp: PropTypes.bool.isRequired,
};
const defaultProps = {};

function BlogSummaryCard({
  imgSrc, heading, contentSummary, handleClick, desktopAndUp,
}) {
  return (
    <Card>
      <FlexView column={!desktopAndUp}>
        <FlexView
          width={!desktopAndUp ? '100%' : '300px'}
          height={!desktopAndUp ? '200px' : 'auto'}
        >
          <ProgressiveImage src={imgSrc} />
        </FlexView>
        <FlexView width="100%" style={{}} wrap>
          <FlexView width="100%" style={{}}>
            <CardPad>
              <HeadingGroup
                size="4"
                withMargin={false}
                mainText={heading}
                subText={contentSummary}
              />
            </CardPad>
          </FlexView>
          <CardActions
            comps={[<Button text="Read more" handleClick={handleClick} />]}
            layout="right"
          />
        </FlexView>
      </FlexView>
    </Card>
  );
}

BlogSummaryCard.propTypes = propTypes;
BlogSummaryCard.defaultProps = defaultProps;

export default viewPort(BlogSummaryCard);
