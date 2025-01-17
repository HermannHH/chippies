import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';


const Container = styled.div`
  ${props => `
    ${props.rad && `border-radius: ${props.theme.borders.radius}px`};
    ${props.all && `border: thin solid ${props.theme.colors[props.color][props.shade]}`};
    ${props.top && `border-top: thin solid ${props.theme.colors[props.color][props.shade]}`};
    ${props.right && `border-right: thin solid ${props.theme.colors[props.color][props.shade]}`};
    ${props.bottom && `border-bottom: thin solid ${props.theme.colors[props.color][props.shade]}`};
    ${props.left && `border-left: thin solid ${props.theme.colors[props.color][props.shade]}`};
  `};
`;

function Border({
  theme, children, all, top, right, bottom, left, rad, color, shade,
}) {
  return (
    <Container
      theme={theme}
      all={all}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      rad={rad}
      color={color}
      shade={shade}
    >
      {children}
    </Container>);
}

Border.propTypes = {
  theme: PropTypes.shape(),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  all: PropTypes.bool,
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  rad: PropTypes.bool,
  color: PropTypes.string,
  shade: PropTypes.string,
};

Border.defaultProps = {
  theme: kratedTheme,
  children: null,
  rad: false,
  all: false,
  top: false,
  right: false,
  bottom: false,
  left: false,
  color: 'grey',
  shade: '-1',
};

export default Border;
