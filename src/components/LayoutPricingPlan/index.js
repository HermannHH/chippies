import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';

import Pad from '../Pad';
import viewPort from '../viewPort';

const propTypes = {
  tabletAndUp: PropTypes.bool.isRequired,
  summaryOne: PropTypes.func.isRequired,
  summaryTwo: PropTypes.func.isRequired,
  summaryThree: PropTypes.element.isRequired,
  featureTable: PropTypes.element.isRequired,
  width: PropTypes.number.isRequired,
};
const defaultProps = {};

function LayoutPricingPlan({
  tabletAndUp,
  width,
  summaryOne,
  summaryTwo,
  summaryThree,
  featureTable,
}) {
  const summaryWidth = tabletAndUp ? '33%' : '100%';
  return (
    <Fragment>
      <FlexView column={!tabletAndUp} width="100%">
        <FlexView
          vAlignContent="center"
          hAlignContent="center"
          width="33%"
          style={summaryOne && { border: 'thin solid red', flex: '1' }}
          grow={1}
        >
          <Pad all={{ xs: 4 }}>{summaryOne || 'Summary One'}</Pad>
        </FlexView>
        {/* <FlexView
          vAlignContent="center"
          hAlignContent="center"
          width={summaryWidth}
          style={!summaryTwo && { border: 'thin solid red' }}
        >
          <Pad all={{ xs: 4 }}>{summaryTwo || 'Summary Two'}</Pad>
        </FlexView>
        <FlexView
          vAlignContent="center"
          hAlignContent="center"
          width={summaryWidth}
          style={!summaryThree && { border: 'thin solid red' }}
        >
          <Pad all={{ xs: 4 }}>{summaryThree || 'Summary Three'}</Pad>
        </FlexView> */}
        <FlexView
          vAlignContent="center"
          hAlignContent="center"
          style={summaryThree && { border: 'thin solid red', flex: '2' }}
          basis="66%"
          grow={1}
        >
          <Pad all={{ xs: 4 }} style={{ flex: '1' }}>
            {summaryThree || 'Summary Three'}
          </Pad>
        </FlexView>
      </FlexView>

      <FlexView width={width}>
        <Pad all={{ xs: 4 }}>
          <FlexView
            vAlignContent="center"
            hAlignContent="center"
            width={width}
            style={!featureTable && { border: 'thin solid red' }}
          >
            {featureTable || 'FeatureTable'}
          </FlexView>
        </Pad>
      </FlexView>
    </Fragment>
  );
}

LayoutPricingPlan.propTypes = propTypes;
LayoutPricingPlan.defaultProps = defaultProps;

export default viewPort(LayoutPricingPlan);
