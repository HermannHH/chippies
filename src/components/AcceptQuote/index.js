import React from 'react';
import PropTypes from 'prop-types';

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
  handleAccept,
  handleReject,
  handleCommentChange,
  commentValue,
}) {
  return (
    <div>
      <BrandHeader size="2" />
      <Pad horizontal={{ xs: 3, md: 5 }}>
        <HeadingGroup
          mainText="Accept quotation"
          subText={`Below is a summary of quotation #${referenceNumber}`}
        />
        <Mrg vertical={{ xs: 5 }}>
          <LineItems data={lineItemData} />
        </Mrg>
        <Mrg vertical={{ xs: 5 }}>
          <Well>
            <TextSection heading="Krated's Disclaimer" size="6">
              {`Krated will not be liable for any loss or damage which you may suffer in any way at
              all, however it may arise at all, which results from: phishing, fraud, a loss, theft
              or compromise of any of your passwords, cards or codes; any mistakes made by you in
              giving us any instructions, including (but not only) any incorrect information given
              to Krated by you; any interruption, malfunction, downtime or other failure of the
              Krated’s Website or any third party system or part of it for any reason; anything at
              all to do with your dealings and transactions with any third parties found or
              mentioned on the Krated website as these are strictly between you and such third
              parties; any loss or damage of your personal information or other data that occurs,
              directly or indirectly as a result of interception, systems malfunction, data theft,
              third party systems, unlawful access to or theft of data; computer viruses,
              programming defects or destructive code on our system or third party systems; any
              event (also known as events of force majeure) which are beyond our control; LIMITATION
              OF LIABILITY: Under no circumstances shall Krated be liable for any indirect or
              consequential damages, or amounts for loss of income, profits, or savings arising out
              of or relating to the performance or failure to perform of the third party under the
              Agreement with them. DISPUTE REGARDING AGREEMENT WITH THIRD PARTIES: Krated only runs
              the WEBSITE in conjunction with certain third parties, so you agree that you will not
              hold it liable in any way for any dispute that you may have with ${seller}. Any such
              dispute must be taken up directly with ${seller} without involving Krated in any way.
              Krated will in no way be responsible or liable for anything said to you, correct or
              otherwise, by ${seller} or for any actions or omissions by ${seller}.`}
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
        {commentToggled && (
          <Mrg vertical={{ xs: 5 }}>
            <TextArea
              placeholder={`Provide ${seller} with any additional details that will make it easier for them to provide the best quotation experience possible`}
              label="Additional comments"
              handleChange={handleCommentChange}
              value={commentValue}
            />
          </Mrg>
        )}
        <Mrg vertical={{ xs: 5 }}>
          <Divider />
        </Mrg>
        <Mrg all={{ xs: 5 }}>
          <FlexPosition
            comps={[
              <Checkbox
                isChecked={termsChecked}
                handleChange={handleTermsChecked}
                label="I agree to the terms of this quotation"
              />,
            ]}
            layout="right"
          />
        </Mrg>
        <Mrg vertical={{ xs: 5 }} />
        <Mrg vertical={{ xs: 5 }}>
          <FlexPosition
            comps={[
              <Button
                text="I want to reject this quotation"
                handleClick={handleReject}
                upcase={false}
              />,
              <Button
                text="Accept"
                raised
                whiteText
                disabled={!termsChecked}
                handleClick={handleAccept}
                color="red"
              />,
            ]}
            layout="spread"
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
      qty: PropTypes.number.isRequired,
      itemPrice: PropTypes.string.isRequired,
      subTotal: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  handleCommentToggle: PropTypes.func.isRequired,
  commentToggled: PropTypes.bool.isRequired,
  seller: PropTypes.string.isRequired,
  termsChecked: PropTypes.bool.isRequired,
  handleTermsChecked: PropTypes.func.isRequired,
  handleAccept: PropTypes.func.isRequired,
  handleReject: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired,
  commentValue: PropTypes.string.isRequired,
};

AcceptQuote.defaultProps = {};

export default AcceptQuote;
