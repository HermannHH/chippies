import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';


const Container = styled.div`
  ${props => `
    ${props.radius && `border-radius: ${props.theme.borders.radius}px`};
    ${props.all && `border: thin solid ${props.theme.colors[props.color][props.shade]}`};
    ${props.top && `border-top: thin solid ${props.theme.colors[props.color][props.shade]}`};
    ${props.right && `border-right: thin solid ${props.theme.colors[props.color][props.shade]}`};
    ${props.bottom && `border-bottom: thin solid ${props.theme.colors[props.color][props.shade]}`};
    ${props.left && `border-left: thin solid ${props.theme.colors[props.color][props.shade]}`};
  `};
`;

function Border({
  theme, children, all, top, right, bottom, left, radius, color, shade,
}) {
  return (
    <Container
      theme={theme}
      all={all}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      radius={radius}
      color={color}
      shade={shade}
    >
      {children}
    </Container>);
}

Border.propTypes = {
  theme: PropTypes.shape().isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  all: PropTypes.bool,
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  radius: PropTypes.bool,
  color: PropTypes.string.isRequired,
  shade: PropTypes.number.isRequired,
};

Border.defaultProps = {
  radius: false,
  all: false,
  top: false,
  right: false,
  bottom: false,
  left: false,
};

export default withTheme(Border);
