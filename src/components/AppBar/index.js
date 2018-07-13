import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';

import ColorBlock from '../ColorBlock';
import BrandedMixedLogo from '../BrandedMixedLogo';
import Pad from '../Pad';

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  ${props => `
    box-shadow: ${props.shadowDropIn && props.theme.box.shadow.shallow};
    height: ${props.theme.appBar.megaHeight}px;
  `};
`;

const LogoWrapper = styled.div`
  display: inline-block;
  padding-top: 5px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;


const LinksWrapper = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  justify-content: flex-end;
  ${props => `
    height: ${props.theme.appBar.megaHeight}px;
  `};
`;

function AppBar({
  theme,
  type,
  shadowDropIn,
  navItems,
  handleLogoClick,
}) {
  return (
    <ColorBlock
      width="100%"
      height={`${theme.appBar.megaHeight}px`}
      color={type}
      shade="0"
    >
      <InnerWrapper
        shadowDropIn={shadowDropIn}
        theme={theme}
      >
        <LogoWrapper onClick={handleLogoClick}>
          <Pad horizontal={{ xs: 3 }}>
            <BrandedMixedLogo />
          </Pad>
        </LogoWrapper>
        <LinksWrapper
          theme={theme}
        >
          {navItems.map((x, i) => (
            <Pad horizontal={{ xs: 3 }} key={i}>
              {x}
            </Pad>
          ))}
        </LinksWrapper>
      </InnerWrapper>
    </ColorBlock>
  );
}

AppBar.propTypes = {
  theme: PropTypes.shape(),
  type: PropTypes.oneOf(['blue', 'white']),
  shadowDropIn: PropTypes.bool,
  navItems: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleLogoClick: PropTypes.func.isRequired,
};
AppBar.defaultProps = {
  theme: kratedTheme,
  type: 'white',
  shadowDropIn: false,
};


export default AppBar;
