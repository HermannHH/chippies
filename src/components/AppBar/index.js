import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';

import ColorBlock from '../ColorBlock';
import BrandedMixedLogo from '../BrandedMixedLogo';
import Pad from '../Pad';
import viewPort from '../viewPort';
import MobileNavMenu from '../MobileNavMenu';

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
  navItemElements,
  handleLogoClick,
  desktopAndUp,
  navItemShape,
  mobileNavOpen,
  handleMobileNavOpen,
  handleMobileNavClose,
}) {
  let navContent;
  if (desktopAndUp) {
    navContent = navItemElements.map((x, i) => (
      <Pad horizontal={{ xs: 3 }} key={i}>
        {x}
      </Pad>
    ));
  } else {
    navContent = (
      <Pad horizontal={{ xs: 4 }}>
        <MobileNavMenu
          openMobileNavMenu={handleMobileNavOpen}
          closeMobileNavMenu={handleMobileNavClose}
          show={mobileNavOpen}
          linkItems={navItemShape}
        />
      </Pad>
    );
  }
  return (
    <ColorBlock width="100%" height={`${theme.appBar.megaHeight}px`} color={type} shade="0">
      <InnerWrapper shadowDropIn={shadowDropIn} theme={theme}>
        <LogoWrapper onClick={handleLogoClick}>
          <Pad horizontal={{ xs: 3 }}>
            <BrandedMixedLogo />
          </Pad>
        </LogoWrapper>
        <LinksWrapper theme={theme}>{navContent}</LinksWrapper>
      </InnerWrapper>
    </ColorBlock>
  );
}

AppBar.propTypes = {
  theme: PropTypes.shape(),
  type: PropTypes.oneOf(['blue', 'white']),
  shadowDropIn: PropTypes.bool,
  navItemElements: PropTypes.arrayOf(PropTypes.element).isRequired,
  navItemShape: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleLogoClick: PropTypes.func.isRequired,
  desktopAndUp: PropTypes.bool.isRequired,
  mobileNavOpen: PropTypes.bool,
  handleMobileNavOpen: PropTypes.func.isRequired,
  handleMobileNavClose: PropTypes.func.isRequired,
};
AppBar.defaultProps = {
  theme: kratedTheme,
  type: 'white',
  shadowDropIn: false,
  mobileNavOpen: false,
};

export default viewPort(AppBar);
