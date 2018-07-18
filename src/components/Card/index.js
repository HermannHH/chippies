import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';

const CardWrapper = styled.div`
  ${props => `
    box-shadow: ${props.theme.box.shadow.medium};
    border-radius: ${props.theme.borders.radius}px;
    background-color: ${props.theme.colors.white['0']};
    &:hover {
      ${props.onClick && 'cursor: pointer;'};
    };
    position: relative;
  `};
  overflow: hidden;
`;

function Card({ handleClick, children, theme }) {
  return (
    <CardWrapper theme={theme} onClick={handleClick}>
      {children}
    </CardWrapper>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  handleClick: PropTypes.func,
  theme: PropTypes.shape(),
};

Card.defaultProps = {
  theme: kratedTheme,
  handleClick: undefined,
};

export default Card;
