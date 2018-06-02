import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ColorBlock from '../ColorBlock';
import InspireMessageHeading from '../InspireMessageHeading';
import PulsingBrandedWhiteIcon from '../PulsingBrandedWhiteIcon';


function LoadingScreen() {

  const colors = [
    'blue',
    'purple',
    'ocean',
    'green',
  ];
  const col = colors[Math.floor(Math.random() * colors.length)];

  return (
    <ColorBlock color={col} shade="0" width="100%" height="100%">
      <Grid style={{ height: '100%' }}>
        <Row center="xs" middle="xs" style={{ height: '100%' }}>
          <Col xs={6}>
            <PulsingBrandedWhiteIcon />
            <InspireMessageHeading
              size="4"
              color="white"
              shade="0"
            />
          </Col>
        </Row>
      </Grid>
    </ColorBlock>
  );
}

LoadingScreen.propTypes = {
};

LoadingScreen.defaultProps = {
};

export default LoadingScreen;
