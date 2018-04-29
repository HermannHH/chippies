import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BrandHeader from '../BrandHeader';
import Pad from '../Pad';
import Checkbox from '../Checkbox';
import Mrg from '../Mrg';
import Divider from '../Divider';
import FlexPosition from '../FlexPosition';
import Button from '../Button';
import HeadingGroup from '../HeadingGroup';
import LineItems from '../LineItems';
import TextSection from '../TextSection';
import Toggle from '../Toggle';
import TextArea from '../TextArea';
import Well from '../Well';


function AcceptQuote({
  lineItemData,
  referenceNumber,
  handleCommentToggle,
  commentToggled,
  seller,
  termsChecked,
  handleTermsChecked,

}) {
  return (
    <div>
      <BrandHeader size="2" />
      <Pad horizontal={{ xs: 3, md: 5 }}>
        <HeadingGroup mainText="Accept quotation" subText={`Below is a summary of quotation #${referenceNumber}`} />
        <Mrg vertical={{ xs: 5 }}>
          <LineItems data={lineItemData} />
        </Mrg>
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
            handleChange={handleCommentToggle}
            checked={commentToggled}
            label={commentToggled ? 'Remove comment' : `Leave ${seller} a comment`}
          />
        </Mrg>
        {commentToggled &&
        <Mrg vertical={{ xs: 5 }}>
          <TextArea
            placeholder={`Provide ${seller} with any additional details that will make it easier for them to provide the best quotation experience possible`}
            label="Additional comments"
          />
        </Mrg>
        }
        <Mrg vertical={{ xs: 5 }}>
          <Divider />
        </Mrg>
        <Mrg all={{ xs: 5 }}>
          <FlexPosition
            buttons={[
              <Checkbox checked={termsChecked} handleChange={handleTermsChecked} label="I agree to the terms of this quotation" />,
            ]}
            layout="right"
          />
        </Mrg>
        <Mrg vertical={{ xs: 5 }} />
        <Mrg vertical={{ xs: 5 }}>
          <FlexPosition
            comps={[
              <Button text="Reject" disabled={!termsChecked} />,
              <Button text="Accept" raised whiteText disabled={!termsChecked} />,
            ]}
            layout="right"
          />
        </Mrg>
      </Pad>
    </div>
  );
}

AcceptQuote.propTypes = {
  referenceNumber: PropTypes.string.isRequired,
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
  handleCommentToggle: PropTypes.func.isRequired,
  commentToggled: PropTypes.bool.isRequired,
  seller: PropTypes.string.isRequired,
  termsChecked: PropTypes.bool.isRequired,
  handleTermsChecked: PropTypes.func.isRequired,
};

AcceptQuote.defaultProps = {

};

export default AcceptQuote;
