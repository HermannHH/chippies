import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Pad from '../Pad';


function CardGrid({ data, el }) {
  const Card = el;
  return (
    <Grid fluid>
      <Row>
        {Object.keys(data).map(x => (
          <Col xs={12} sm={12} md={4} lg={3} key={x}>
            <Pad
              horizontal={{ xs: 3 }}
              vertical={{ xs: 3 }}
            >
              <Card {...data[x]} />
            </Pad>
          </Col>
        ))}
      </Row>
    </Grid>
  );
}

CardGrid.propTypes = {
  data: PropTypes.shape().isRequired,
  el: PropTypes.element.isRequired,
};

// CardGrid.defaultProps = {
// };

export default CardGrid;
