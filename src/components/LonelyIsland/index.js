import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';


import { viewPort } from '../helpers';

import Pad from '../Pad';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ${props => !props.topCoords && `
    display: flex;
    justify-content: center;
    align-items: center;
  `};
  ${props => !props.hasContent && `
     background-color: ${props.theme.colors.red['0']};
  `};
`;


const Container = styled.div`
  ${props => !props.topCoords && `
    display: block;
    margin: 0 auto;
  `};
  width: 90%;
  ${props => !props.compressed && `
    ${props.device === 'tablet' && 'width: 80%'};
    ${props.device === 'desktop' && 'width: 80%'};
    ${props.device === 'large_desktop' && 'width: 70%'};
  `};
  ${props => props.compressed && `
    ${props.device === 'tablet' && 'width: 60%'};
    ${props.device === 'desktop' && 'width: 50%'};
    ${props.device === 'large_desktop' && 'width: 50%'};
  `};
  ${props => !props.hasContent && `
     background-color: ${props.theme.colors.blue['0']};
     height: 10%;
  `};

  ${props => props.topCoords && `
    display: block;
    margin: 0 auto;
    margin-top: ${props.topCoords.phone}px;
    height: 400px;
  `};

`;

/**
 * Used for normal LonelyIslands. Will not be progressive
 */

function LonelyIsland({
  device, compressed, topCoords, children, theme,
}) {
  return (
    <Wrapper topCoords={topCoords} hasContent={children} theme={theme}>
      <Pad
        all={{
            xs: 1,
        }}
      >
        <Container device={device} compressed={compressed} hasContent={children} theme={theme} topCoords={topCoords}>
            {children}
        </Container>
      </Pad>
    </Wrapper>
  );
}

LonelyIsland.propTypes = {
  device: PropTypes.oneOf([
    'phone',
    'large_desktop',
    'desktop',
    'tablet',
    'landscape_phone',
  ]).isRequired,
  compressed: PropTypes.bool,
  topCoords: PropTypes.shape({
    phone: PropTypes.number.isRequired,
    large_desktop: PropTypes.number.isRequired,
    desktop: PropTypes.number.isRequired,
    tablet: PropTypes.number.isRequired,
    landscape_phone: PropTypes.number.isRequired,
  }),
  children: PropTypes.element,
  theme: PropTypes.shape(),
};

LonelyIsland.defaultProps = {
  theme: kratedTheme,
  compressed: false,
  topCoords: null,
  children: null,
};

export default viewPort(LonelyIsland);
