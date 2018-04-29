import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BrandHeader from '../BrandHeader';
import Pad from '../Pad';
import Mrg from '../Mrg';
import HeadingGroup from '../HeadingGroup';
import LineItems from '../LineItems';
import TextSection from '../TextSection';
import Toggle from '../Toggle';
import Well from '../Well';


function AcceptQuote({
  lineItemData,
}) {
  return (
    <div>
      <BrandHeader size="2" />
      <Pad horizontal={{ xs: 3, md: 5 }}>
        <HeadingGroup mainText="Accept quotation" subText="Below is a summary of quotation #123" />
        <LineItems data={lineItemData} />
        <Mrg vertical={{ xs: 5 }}>
          <Well>
            <TextSection
              heading="Krated's Disclaimer"
              size="6"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
            </TextSection>
          </Well>
        </Mrg>
        <Mrg vertical={{ xs: 5 }}>
          <Toggle
            id="toggle"
            handleChange={() => (alert('change click'))}
            checked
          />
        </Mrg>
      </Pad>
    </div>
  );
}

AcceptQuote.propTypes = {
  lineItemData: PropTypes.shape({
    grandTotal: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      qty: PropTypes.string.isRequired,
      itemPrice: PropTypes.string.isRequired,
      subTotal: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

AcceptQuote.defaultProps = {

};

export default AcceptQuote;
