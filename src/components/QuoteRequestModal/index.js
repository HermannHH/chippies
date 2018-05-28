import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Modal from '../Modal';
import InteractiveLineItem from '../InteractiveLineItem';
import Pad from '../Pad';
import HeadingGroup from '../HeadingGroup';
import Divider from '../Divider';
import QuoteRequestForm from '../QuoteRequestForm';


function QuoteRequestModal({
  closeModal,
  items,
  handleQtyClickChange,
  handleQtyTypingChange,
  handleSubmit,
}) {
  return (
    <Modal
      closeModal={closeModal}
    >
      <HeadingGroup mainText="Quotation items" subText="Confirm the quotation item details below to provide us with the information required to generate an accurate quotation" />
      {Object.keys(items).map(x => (
        <Pad
          key={x}
          vertical={{ xs: 3 }}
        >
          <InteractiveLineItem
            id={x}
            title={items[x].text}
            src={items[x].src}
            handleTypingChange={handleQtyTypingChange}
            handleClickChange={handleQtyClickChange}
            value={items[x].qty}
          />
        </Pad>
      ))}
      <Pad
        vertical={{ xs: 3 }}
        top={{ xs: 5 }}
      >
        <Divider />
      </Pad>
      <HeadingGroup mainText="Your company details" subText="Your company & personal information is required by the seller to generate a professional quotation that can be personalised for you" />
      <Pad
        vertical={{ xs: 3 }}
        bottom={{ xs: 6 }}
      >
        <QuoteRequestForm
          handleSubmit={()=>alert('yaya')}
        />
      </Pad>
    </Modal>
  );
}

QuoteRequestModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleQtyClickChange: PropTypes.func.isRequired,
  handleQtyTypingChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

QuoteRequestModal.defaultProps = {
};

export default QuoteRequestModal;
