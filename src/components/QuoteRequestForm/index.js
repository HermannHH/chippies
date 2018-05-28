import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string, email } from 'yup';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { setLocale } from 'yup/lib/customLocale';

import FormInputContainer from '../FormInputContainer';
import Button from '../Button';
import FormActionContainer from '../FormActionContainer';
import TextInput from '../TextInput';
import TextArea from '../TextArea';


setLocale({
  mixed: {
    required: 'Is required',
  },
  string: {
    email: 'Must be a valid email address',
  },
});

function QuoteRequestForm({
  submit,
}) {
  const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    cellPhone: string().required(),
    email: string().required().email(),
    companyName: string().required().required(),
  });

  return (
    <Formik
      initialValues={{
          firstName: '',
          lastName: '',
          cellPhone: '',
          email: '',
          companyName: '',
          companyAddress: '',
          comment: '',
        }}
      validationSchema={validationSchema}
      onSubmit={(
          values,
          { setSubmitting, setErrors },
        ) => {
            submit(values)
        }}
      render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <Grid>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={12} lg={6}>
                  <FormInputContainer>
                    <TextInput
                      id="firstName"
                      label="First Name"
                      placeholder="Your First Name"
                      handleChange={handleChange}
                      value={values.firstName}
                      handleBlur={handleBlur}
                      errors={(touched.firstName && errors.firstName) && errors.firstName}
                    />
                  </FormInputContainer>
                </Col>
                <Col md={12} lg={6}>
                  <FormInputContainer>
                    <TextInput
                      id="lastName"
                      label="Last Name"
                      placeholder="Your Last Name"
                      handleChange={handleChange}
                      value={values.lastName}
                      handleBlur={handleBlur}
                      errors={(touched.lastName && errors.lastName) && errors.lastName}
                    />
                  </FormInputContainer>
                </Col>
                <Col md={12} lg={6}>
                  <FormInputContainer>
                    <TextInput
                      id="cellPhone"
                      label="Cellphone"
                      placeholder="Your Cellphone Number"
                      handleChange={handleChange}
                      value={values.cellPhone}
                      handleBlur={handleBlur}
                      errors={(touched.cellPhone && errors.cellPhone) && errors.cellPhone}
                    />
                  </FormInputContainer>
                </Col>
                <Col md={12} lg={6}>
                  <FormInputContainer>
                    <TextInput
                      id="email"
                      label="Email Address"
                      placeholder="Your Email Address"
                      handleChange={handleChange}
                      value={values.email}
                      handleBlur={handleBlur}
                      errors={(touched.email && errors.email) && errors.email}
                    />
                  </FormInputContainer>
                </Col>
                <Col md={12} lg={6}>
                  <FormInputContainer>
                    <TextInput
                      id="companyName"
                      label="Company Name"
                      placeholder="Your Company Name"
                      handleChange={handleChange}
                      value={values.companyName}
                      handleBlur={handleBlur}
                      errors={(touched.companyName && errors.companyName) && errors.companyName}
                    />
                  </FormInputContainer>
                </Col>
                <Col xs={12}>
                  <FormInputContainer>
                    <TextArea
                      id="comment"
                      label="Additional Comments"
                      placeholder="Any comment that might help the seller give a more accurate quotation"
                      handleChange={handleChange}
                      value={values.comment}
                      handleBlur={handleBlur}
                      errors={(touched.comment && errors.comment) && errors.comment}
                    />
                  </FormInputContainer>
                </Col>
                <Col xs={12}>
                  <FormActionContainer
                    actions={[<Button
                      text="Submit"
                      disabled={isSubmitting || !isValid}
                      type="submit"
                      raised
                      whiteText
                      isLoading={isSubmitting}
                      color="red"
                    />]}
                  />
                </Col>
              </Row>
            </form>
          </Grid>
        )}
    />
  );
}

QuoteRequestForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

QuoteRequestForm.defaultProps = {
};

export default QuoteRequestForm;
