import React from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';

import Card from '../Card';
import CardPad from '../CardPad';
import ProgressiveImage from '../ProgressiveImage';
import HeadingGroup from '../HeadingGroup';
import CardActions from '../CardActions';
import Button from '../Button';

const propTypes = {
  imgSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  contentSummary: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
const defaultProps = {};

function BlogSummaryCard({ imgSrc, heading, contentSummary, handleClick }) {
  return (
    <Card>
      <FlexView>
        <FlexView basis="200px">
          <ProgressiveImage src={imgSrc} />
        </FlexView>
        <FlexView width="100%" style={{  }} wrap>
          <FlexView width="100%" style={{ }}>
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
            comps={[
                <Button text="Read more" handleClick={handleClick} />
            ]}
            layout="right"
          />
        </FlexView>
      </FlexView>
    </Card>
  );
}

BlogSummaryCard.propTypes = propTypes;
BlogSummaryCard.defaultProps = defaultProps;

export default BlogSummaryCard;
