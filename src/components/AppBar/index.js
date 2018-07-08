import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';

import ColorBlock from '../ColorBlock';
import BrandedMixedLogo from '../BrandedMixedLogo';
import Pad from '../Pad';
import Hyperlink from '../Hyperlink';
import Button from '../Button';

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  ${props => `
    box-shadow: ${props.shadowDropIn && props.theme.box.shadow.shallow};
    height: 90px;
  `};
`;

const LogoWrapper = styled.div`
  display: inline-block;
  padding-top: 5px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;


const LinksWrapper = styled.div`
  display: inline-block;
  height: 90px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  justify-content: flex-end;
`;

function AppBar({
  theme, type, shadowDropIn, navItems,
}) {
  // const linkItems = links.map((x) => {
  //   if (x.type === 'link') {
  //     return (
  //       <Pad horizontal={{ xs: 3 }} key={x.id}>
  //         <Hyperlink text={x.body} handleClick={() => alert('Hello Hyperlink')} />
  //       </Pad>
  //     );
  //   } else if (x.type === 'button') {
  //     return (
  //       <Pad horizontal={{ xs: 3 }} key={x.id}>
  //         <Button
  //           text={x.body}
  //           handleClick={() => alert('handleClick')}
  //           raised
  //           whiteText
  //           small
  //           color="red"
  //         />
  //       </Pad>
  //     );
  //   }
  // });

  return (
    <ColorBlock
      width="100%"
      height={`90px`}
      color={type}
      shade="0"
    >
      <InnerWrapper
        shadowDropIn={shadowDropIn}
        theme={theme}
      >
        <LogoWrapper>
          <Pad horizontal={{ xs: 3 }}>
            <BrandedMixedLogo />
          </Pad>
        </LogoWrapper>
        <LinksWrapper>
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
};
AppBar.defaultProps = {
  theme: kratedTheme,
  type: 'white',
  shadowDropIn: false,
};


export default AppBar;
