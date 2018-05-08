import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Pad from '../Pad';


function CardGrid({ data, el }) {
  const Card = el;
  return (
    <Grid fluid>
      <Row>
        {data.map(x => (
          <Col xs={12} sm={12} md={6} lg={4} key={x.id}>
            <Pad
              horizontal={{ xs: 3 }}
              vertical={{ xs: 3 }}
            >
              <Card {...x} />
            </Pad>
          </Col>
        ))}
      </Row>
    </Grid>
  );
}

CardGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  el: PropTypes.element.isRequired,
};

// CardGrid.defaultProps = {
// };

export default CardGrid;
