import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';

import Heading from '../Heading';
import HeadingGroup from '../HeadingGroup';
import Label from '../Label';
import Paragraph from '../Paragraph';

const propTypes = {};
const defaultProps = {};

function TableRow({
  n1,
  n1Align,
  n2,
  n2Align,
  n3,
  n3Align,
}) {
  return (
    <FlexView>

        {/* Row 1 */}
        <FlexView
          vAlignContent="center"
          hAlignContent={`${n1Align}` || 'center'}
          grow={1}
          basis="40%"
          style={{ textAlign: `${n1Align}` || 'center' }}
        >
          {n1}
        </FlexView>
        <FlexView
          vAlignContent="top"
          hAlignContent={`${n2Align}` || 'center'}
          grow={1}
          basis="20%"
          style={{ textAlign: `${n2Align}` || 'center' }}
        >
          {n2}
        </FlexView>
        <FlexView
          vAlignContent="top"
          hAlignContent={`${n3Align}` || 'center'}
          grow={1}
          basis="40%"
          style={{ textAlign: `${n3Align}` || 'center' }}
        >
          {n3}
        </FlexView>
      </FlexView>
  )
}

function PricingTable({}) {
  return (
    <Fragment>

      <FlexView>
        <FlexView
          vAlignContent="center"
          hAlignContent="center"
          grow={1}
          basis="40%"
        />
        <FlexView
          vAlignContent="center"
          hAlignContent="center"
          grow={1}
          basis="20%"
          style={{ textAlign: 'center' }}
        >
          <HeadingGroup mainText="R0" subText="user / month" size="3" />
        </FlexView>
        <FlexView
          vAlignContent="center"
          hAlignContent="center"
          grow={1}
          basis="20%"
        >
          <Heading text="Simple Pricing" size="4" />
        </FlexView>
        <FlexView
          vAlignContent="center"
          hAlignContent="center"
          grow={1}
          basis="20%"
        >
          <Heading text="Simple Pricing" size="4" />
        </FlexView>
      </FlexView>

      <FlexView>
        {/* Row 1 */}
        <FlexView
          vAlignContent="center"
          hAlignContent="center"
          grow={1}
          basis="40%"
        >
          <Label text="Usage" />
          <Paragraph># Products</Paragraph>
          <Paragraph># Products</Paragraph>
          <Paragraph># Products</Paragraph>
        </FlexView>
        <FlexView
          vAlignContent="top"
          hAlignContent="center"
          grow={1}
          basis="20%"
          style={{ textAlign: 'center' }}
        >
          <HeadingGroup mainText="FREE" subText="Essential features" size="6" />
        </FlexView>
        <FlexView
          vAlignContent="top"
          hAlignContent="center"
          grow={1}
          basis="40%"
          style={{ textAlign: 'center' }}
        >
          <HeadingGroup mainText="More coming soon" subText="We are constantly adding new features and will be releasing additional plans in the near future" size="6" />
        </FlexView>
      </FlexView>
      <TableRow
          n1={<Label text="Usage"/>}
          n1Align="left"
      />
      <TableRow
          n1={<Paragraph># of Products</Paragraph>}
          n1Align="left"
          n2={<Paragraph>Unlimited</Paragraph>}
      />
    </Fragment>
  );
}

PricingTable.propTypes = propTypes;
PricingTable.defaultProps = defaultProps;

export default PricingTable;
