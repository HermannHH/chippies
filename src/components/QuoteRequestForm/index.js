import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FormInputContainer from '../FormInputContainer';
import Button from '../Button';
import FormActionContainer from '../FormActionContainer';
import TextInput from '../TextInput';
import TextArea from '../TextArea';

class QuoteRequestForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: { val: '' },
      lastName: { val: '' },
      cellphoneNumber: { val: '' },
      email: { val: '' },
      companyName: { val: '' },
      comment: { val: '' },
    };
  }

  handleTypeChange(e) {
    this.setState({
      [e.target.id]: {
        ...this.state[e.target.id],
        val: e.target.value,
      },
    });
  }
  render() {
    const {
      handleSubmit,
    } = this.props;
    const {
      firstName,
      lastName,
      cellphoneNumber,
      email,
      companyName,
      comment,
    } = this.state;
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <FormInputContainer>
              <TextInput
                placeholder="First Name"
                handleChange={e => this.handleTypeChange(e)}
                value={firstName.val}
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
                handleChange={e => this.handleTypeChange(e)}
                value={lastName.val}
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
                handleChange={e => this.handleTypeChange(e)}
                value={cellphoneNumber.val}
                label="Cellphone Number"
                id="cellphoneNumber"
              />
            </FormInputContainer>
          </Col>
          <Col xs={12} md={6}>
            <FormInputContainer>
              <TextInput
                placeholder="Email"
                handleChange={e => this.handleTypeChange(e)}
                value={email.val}
                label="Email"
                id="email"
              />
            </FormInputContainer>
          </Col>
          <Col xs={12} md={6}>
            <FormInputContainer>
              <TextInput
                placeholder="Company Name"
                handleChange={e => this.handleTypeChange(e)}
                value={companyName.val}
                label="Company Name"
                id="companyName"
              />
            </FormInputContainer>
          </Col>
          <Col xs={12} md={6}>
            <FormInputContainer>
              <TextInput
                placeholder="Business Address"
                handleChange={e => this.handleTypeChange(e)}
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
                handleChange={e => this.handleTypeChange(e)}
                value={comment.val}
                label="Comment"
                id="comment"
              />
            </FormInputContainer>
          </Col>
          <Col xs={12}>
            <FormActionContainer
              actions={[
                <Button text="handleSubmit" handleClick={handleSubmit} raised whiteText color="red" />,
    ]}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}


QuoteRequestForm.propTypes = {
};

QuoteRequestForm.defaultProps = {
};

export default QuoteRequestForm;
