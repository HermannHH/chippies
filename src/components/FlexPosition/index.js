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
  ${props => props.layout === 'center' && 'justify-content: center'};
`;

const CompContainer = styled.div`
  margin: 0 ${bs(0.5)};
  &:first-child {
      margin-left: 0px;
  };
  &:last-child {
      margin-right: 0px;
  };
`;

function FlexPosition({ comps, layout }) {
  return (
    <Wrapper layout={layout}>
      {comps && comps.map((x, i) => (
        <CompContainer key={i}>{x}</CompContainer>
        ))}
    </Wrapper>
  );
}

FlexPosition.propTypes = {
  comps: PropTypes.arrayOf(PropTypes.element).isRequired,
  layout: PropTypes.oneOf([
    'spread',
    'left',
    'right',
    'center',
  ]),
};

FlexPosition.defaultProps = {
  layout: 'right',
};

export default withTheme(FlexPosition);
