import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Modal from '../Modal';
import InteractiveLineItem from '../InteractiveLineItem';
import Pad from '../Pad';
import HeadingGroup from '../HeadingGroup';
import Divider from '../Divider';
import FormInputContainer from '../FormInputContainer';
import Button from '../Button';
import FormActionContainer from '../FormActionContainer';
import TextInput from '../TextInput';
import TextArea from '../TextArea';


function QuoteRequestModal({
  closeModal,
  items,
  handleQtyClickChange,
  handleQtyTypingChange,
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
        <Grid fluid>
          <Row>
            <Col xs={12} md={6}>
              <FormInputContainer>
                <TextInput
                  placeholder="First Name"
                  handleChange={() => alert('effew')}
                  value="Hello world"
                  label="First Name"
                  id="firstName"
                  tabIndex={0}
                />
              </FormInputContainer>
            </Col>
            <Col xs={12} md={6}>
              <FormInputContainer>
                <TextInput
                  placeholder="Last Name"
                  handleChange={() => alert('effew')}
                  value="Hello world"
                  label="Last Name"
                  id="lastName"
                  tabIndex={1}
                />
              </FormInputContainer>
            </Col>
            <Col xs={12} md={6}>
              <FormInputContainer>
                <TextInput
                  placeholder="Cellphone Number"
                  handleChange={() => alert('effew')}
                  value="Hello world"
                  label="Cellphone Number"
                  id="cellphoneNumber"
                />
              </FormInputContainer>
            </Col>
            <Col xs={12} md={6}>
              <FormInputContainer>
                <TextInput
                  placeholder="Email"
                  handleChange={() => alert('effew')}
                  value="Hello world"
                  label="Email"
                  id="email"
                />
              </FormInputContainer>
            </Col>
            <Col xs={12} md={6}>
              <FormInputContainer>
                <TextInput
                  placeholder="Company Name"
                  handleChange={() => alert('effew')}
                  value="Hello world"
                  label="Company Name"
                  id="companyName"
                />
              </FormInputContainer>
            </Col>
            <Col xs={12} md={6}>
              <FormInputContainer>
                <TextInput
                  placeholder="Business Address"
                  handleChange={() => alert('effew')}
                  value="Hello world"
                  label="Business Address"
                  id="businessAddress"
                />
              </FormInputContainer>
            </Col>
            <Col xs={12}>
              <FormInputContainer>
                <TextArea
                  placeholder="Comment"
                  handleChange={() => alert('effew')}
                  value="Hello world"
                  label="Comment"
                  id="comment"
                />
              </FormInputContainer>
            </Col>
            <Col xs={12}>
              <FormActionContainer
                actions={[
                  <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText color="red" />,
          ]}
              />
            </Col>
          </Row>
        </Grid>
      </Pad>
    </Modal>
  );
}

QuoteRequestModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleQtyClickChange: PropTypes.func.isRequired,
  handleQtyTypingChange: PropTypes.func.isRequired,
};

QuoteRequestModal.defaultProps = {
};

export default QuoteRequestModal;
