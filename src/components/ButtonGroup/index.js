import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Shevy from 'shevyjs';


import { shevyConfig } from '../../helpers';

const shevy = new Shevy(shevyConfig);
const { baseSpacing: bs } = shevy;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${props => props.layout === 'right' && 'justify-content: flex-end'};
  ${props => props.layout === 'spread' && 'justify-content: space-between'};
  ${props => props.layout === 'left' && 'justify-content: flex-start'};
`;

const ButtonContainer = styled.div`
  margin: 0 ${bs(0.5)};
  &:first-child {
      margin-left: 0px;
  };
  &:last-child {
      margin-right: 0px;
  };
`;

function ButtonGroup({ buttons, layout }) {
  return (
    <Wrapper layout={layout}>
      {buttons.map((x, i) => (
        <ButtonContainer key={i}>{x}</ButtonContainer>
        ))}
    </Wrapper>
  );
}

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.element).isRequired,
  layout: PropTypes.oneOf([
    'spread',
    'left',
    'right',
  ]),
};

ButtonGroup.defaultProps = {
  layout: 'right',
};

export default withTheme(ButtonGroup);
