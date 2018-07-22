import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import kratedTheme from 'krated-theme';

const colors = ['red', 'blue', 'purple', 'ocean', 'green', 'yellow'];

const propTypes = {
  atomRadius: PropTypes.number.isRequired,
  electronRadius: PropTypes.number.isRequired,
  electronColor: PropTypes.oneOf(colors),
  orbitTime: PropTypes.number,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  electronColor: colors[Math.floor(Math.random() * colors.length)],
  orbitTime: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
  theme: kratedTheme,
};

const orbit = atomRadius => keyframes`
  from {
    transform: rotateZ(0deg) translateX(${atomRadius}px);
  }

  to {
    transform: rotateZ(360deg) translateX(${atomRadius}px);
  }
`;

const OrbitWrapper = styled.div`
  position: relative;
  border-radius: 50%
  border: solid 2px;
  ${props => `
    width: ${2 * props.atomRadius}px;
    height: ${2 * props.atomRadius}px;
    border-color: ${props.theme.colors.white['1']}
  `};
`;

const Electron = styled.div`
  border-radius: 50%
  position: absolute;
  ${props => `
    width: ${2 * props.electronRadius}px;
    height: ${2 * props.electronRadius}px;
    top: ${props.atomRadius - props.electronRadius}px;
    left: ${props.atomRadius - props.electronRadius}px;
    animation: ${orbit(props.atomRadius)} ${props.orbitTime}s linear infinite;
    background-color: ${props.theme.colors[props.electronColor]['0']};
  `};
`;

function OrbitChannel({
  atomRadius, electronRadius, electronColor, orbitTime, theme,
}) {
  return (
    <OrbitWrapper atomRadius={atomRadius} theme={theme}>
      <Electron
        electronColor={electronColor}
        electronRadius={electronRadius}
        atomRadius={atomRadius}
        orbitTime={orbitTime}
        theme={theme}
      />
    </OrbitWrapper>
  );
}

OrbitChannel.propTypes = propTypes;
OrbitChannel.defaultProps = defaultProps;

export default OrbitChannel;
