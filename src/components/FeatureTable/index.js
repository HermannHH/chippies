import React from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';

import Heading from '../Heading';
import viewPort from '../viewPort';

const propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    elem: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    type: PropTypes.oneOf(['heading', 'section', 'default']).isRequired,
  }).isRequired).isRequired,
};
const defaultProps = {};

function FeatureTable({ cells }) {
  return (
    <FlexView column>
      <Heading text="Compare the features" size="4" />
      <FlexView width="100%" column={false} wrap>
        {cells.map(x => (
          <FlexView
            width="25%"
            vAlignContent="center"
            key={x.id}
            style={x.type === 'section' && { backgroundColor: 'red' }}
          >
            {x.elem}
          </FlexView>
        ))}
      </FlexView>
    </FlexView>
  );
}

FeatureTable.propTypes = propTypes;
FeatureTable.defaultProps = defaultProps;

export default viewPort(FeatureTable);
