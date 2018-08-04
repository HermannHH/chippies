import React from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';

import Card from '../Card';
import CardPad from '../CardPad';
import Paragraph from '../Paragraph';
import Hyperlink from '../Hyperlink';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  handleClick: PropTypes.func.isRequired,
};
const defaultProps = {};

function InboxItems({ messages, handleClick }) {
  return (
    <div>
      {messages.map(x => (
        <FlexView key={x.id} marginBottom="15px">
          <Card>
            <CardPad>
              <Paragraph withMargin={false}>{x.text}</Paragraph>
              <FlexView hAlignContent="right">
                <Hyperlink text="See more..." handleClick={handleClick} />
              </FlexView>
            </CardPad>
          </Card>
        </FlexView>
      ))}
    </div>
  );
}

InboxItems.propTypes = propTypes;
InboxItems.defaultProps = defaultProps;

export default InboxItems;
