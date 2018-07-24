import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeOut } from 'react-animations';
import FlexView from 'react-flexview';
import kratedTheme from 'krated-theme';

import Icon from '../Icon';
import EscapeButton from '../EscapeButton';
import Pad from '../Pad';
import Hyperlink from '../Hyperlink';
import viewPort from '../viewPort';

const propTypes = {
  show: PropTypes.bool,
  closeMobileNavMenu: PropTypes.func.isRequired,
  openMobileNavMenu: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  theme: PropTypes.shape({}),
  linkItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    handleClick: PropTypes.func,
  })).isRequired,
};
const defaultProps = {
  show: false,
  theme: kratedTheme,
};

const enter = keyframes`${fadeIn}`;
const exit = keyframes`${fadeOut}`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  width: ${props => `${props.width}px`};
  height: ${props => (props.show ? `${props.height}px` : '0px')};
  animation: ${props => (props.show ? enter : exit)} 0.3s linear;
  background-color: ${props => props.theme.colors.white['0']};
  transition: height 0.3s linear;
  overflow: hidden;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 12;
`;

function MobileNavMenu({
  theme,
  linkItems,
  height,
  width,
  show,
  openMobileNavMenu,
  closeMobileNavMenu,
}) {
  return (
    <div>
      <IconWrapper onClick={openMobileNavMenu}>
        <Icon icon="faBars" size="lg" />
      </IconWrapper>
      <MenuWrapper show={show} height={height} width={width} theme={theme}>
        <FlexView column style={{ width: `${width}px`, height: `${height}px` }}>
          <FlexView width="100%" style={{ padding: '15px' }} hAlignContent="right">
            <EscapeButton handleClick={closeMobileNavMenu} />
          </FlexView>
          <FlexView column width="100%" hAlignContent="left" style={{ paddingTop: '25px' }}>
            {linkItems.map((x, i) => (
              <FlexView key={i} width="100%" style={{ cursor: 'pointer' }} onClick={x.handleClick}>
                <Pad vertical={{ xs: 2 }} horizontal={{ xs: 4 }} key={i}>
                  <Hyperlink
                    text={x.text}
                    handleClick={x.handleClick}
                    color="grey"
                    hoverColor="blue"
                    hoverShade="0"
                  />
                </Pad>
              </FlexView>
            ))}
          </FlexView>
        </FlexView>
      </MenuWrapper>
    </div>
  );
}

MobileNavMenu.propTypes = propTypes;
MobileNavMenu.defaultProps = defaultProps;

export default viewPort(MobileNavMenu);
