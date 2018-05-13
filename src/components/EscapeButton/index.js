import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import Icon from '../Icon';
import Small from '../Small';
import Display from '../Display';
import TextAlign from '../TextAlign';
import Pad from '../Pad';

const Container = styled.div`
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;


function EscapeButton({
  handleClick,
}) {
  return (
    <Container onClick={handleClick}>
      <Display type="block">
        <Pad
          all={{ xs: 2 }}
        >
          <TextAlign align="center">
            <Icon
              icon="faTimes"
              size="lg"
            />
          </TextAlign>
        </Pad>
      </Display>
      <Display type="block">
        <Pad
          top={{ xs: 1 }}
        >
          <TextAlign align="center">
            <Small>ESC to close</Small>
          </TextAlign>
        </Pad>
      </Display>
    </Container>
  );
}

EscapeButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

EscapeButton.defaultProps = {
};

export default EscapeButton;
