import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import kratedTheme from 'krated-theme';

import Pad from '../Pad';
import ColorBlock from '../ColorBlock';

const SlideInUpAnimation = keyframes`
  from {
    bottom: -80px;
  }
  to {
    transform: 0px;
  }
`;

const SlideOutDownAnimation = keyframes`
  from {
    bottom: 0px;
  }
  to {
    bottom: -80px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  ${props => `
    height: ${props.theme.slideBar.height}px;
    box-shadow: ${props.theme.box.shadow.medium};
    position: fixed;
    left: 0px;
    bottom: ${props.show ? '0px' : '-80px'};
    animation: ${props.show ? SlideInUpAnimation : SlideOutDownAnimation} 0.5s linear;
    z-index: 1;
    box-sizing: border-box;
  `};
`;

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 2;
  box-sizing: border-box;
  ${props => `
    height: ${props.theme.slideBar.height}px;
  `};
`;


function SlideBar({ children, theme, show }) {
  return (
    <Wrapper
      theme={theme}
      show={show}
    >
      <ColorBlock color="blue" shade="0" width="100%" height={`${theme.slideBar.height}px`} >
        <Container
          theme={theme}
        >
          {children}
        </Container>
      </ColorBlock>
    </Wrapper>);
}

SlideBar.propTypes = {
  theme: PropTypes.shape({
    slideBar: PropTypes.shape({
      height: PropTypes.number,
    }),
  }),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  show: PropTypes.bool.isRequired,
};

SlideBar.defaultProps = {
  theme: kratedTheme,
  children: null,
}

export default SlideBar;
