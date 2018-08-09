import React from 'react';
import PropTypes from 'prop-types';

import BrandHeader from '../BrandHeader';
import Pad from '../Pad';
import Mrg from '../Mrg';
import TextSection from '../TextSection';
import Button from '../Button';
import FlexPosition from '../FlexPosition';

/**
 * Shown to users after they accept/reject a quote as non-signed in user
 */

function QuoteOnboard({ handleClick, text }) {
  return (
    <div>
      <Pad horizontal={{ xs: 4 }}>
        <BrandHeader size="1" position="center" />
      </Pad>
      <Pad horizontal={{ xs: 3, md: 5 }}>
        <Mrg vertical={{ xs: 5 }}>
          <TextSection heading="Would you like to streamline your business workflow?">
            {text}
          </TextSection>
        </Mrg>
        <Mrg vertical={{ xs: 5 }}>
          <FlexPosition
            comps={[
              <Button text="Yes please" raised whiteText color="red" handleClick={handleClick} />,
            ]}
            layout="center"
          />
        </Mrg>
      </Pad>
    </div>
  );
}

QuoteOnboard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

QuoteOnboard.defaultProps = {};

export default QuoteOnboard;
