import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import FlexView from 'react-flexview';
import kratedTheme from 'krated-theme';

import shevyConfig from '../shevyConfig';
import BrandedWhiteIcon from '../BrandedWhiteIcon';
import Hyperlink from '../Hyperlink';
import Small from '../Small';
import viewPort from '../viewPort';

const shevy = new Shevy(shevyConfig);
const { baseSpacing: bs } = shevy;

const propTypes = {
  linkItems: PropTypes.arrayOf(PropTypes.element).isRequired,
  facebookLink: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
  theme: PropTypes.shape({}),
  desktopAndUp: PropTypes.bool.isRequired,
};

const defaultProps = {
  theme: kratedTheme,
};

const LinkItemWrapper = styled.div`
  display: inline-block;
  text-align: center;
  padding: 0px ${bs(0.5)};
  &:last-child {
    padding-right: 0px;
  }
`;

const SocialLinkItemWrapper = styled.div`
  text-align: center;
  display: inline-block;
  padding: 0px ${bs(0.2)};
  &:last-child {
    padding-right: 0px;
  }
`;

function BrochureFooter({
  theme, linkItems, facebookLink, twitterLink, desktopAndUp,
}) {
  return (
    <FlexView
      column
      width="100%"
      style={{ padding: '5%', backgroundColor: theme.colors.blue['0'] }}
    >
      <FlexView
        row
        column={!desktopAndUp}
        width="100%"
        vAlignContent="center"
        style={{
          borderBottom: 'thin solid',
          borderColor: theme.colors.white['0'],
          paddingBottom: '15px',
        }}
      >
        <FlexView
          hAlignContent="center"
          vAlignContent="center"
          style={!desktopAndUp && { padding: '3%' }}
        >
          <div>
            <BrandedWhiteIcon size="6" />
          </div>
        </FlexView>
        <FlexView
          width="100%"
          vAlignContent="center"
          hAlignContent={!desktopAndUp ? 'center' : 'right'}
          style={{ padding: '15px' }}
        >
          {linkItems.map((x, i) => <LinkItemWrapper key={i}>{x}</LinkItemWrapper>)}
        </FlexView>
      </FlexView>
      <FlexView
        wrap={!desktopAndUp}
        width="100%"
        vAlignContent="center"
        style={{ padding: '15px' }}
      >
        <FlexView
          width={!desktopAndUp ? '100%' : '280px'}
          style={{}}
          hAlignContent={!desktopAndUp && 'center'}
        >
          <div>
            <Small color="white" shade="0">
              {`© ${new Date().getFullYear()} Krated (PTY) Ltd.`}
            </Small>
          </div>
        </FlexView>
        <FlexView
          width="100%"
          hAlignContent={!desktopAndUp ? 'center' : 'right'}
          style={!desktopAndUp && { padding: '3%' }}
        >
          <SocialLinkItemWrapper>
            <Hyperlink
              icon="faFacebookSquare"
              handleClick={() => window.open(facebookLink, '_blank')}
              color="white"
            />
          </SocialLinkItemWrapper>
          <SocialLinkItemWrapper>
            <Hyperlink
              icon="faTwitter"
              handleClick={() => window.open(twitterLink, '_blank')}
              color="white"
            />
          </SocialLinkItemWrapper>
        </FlexView>
      </FlexView>
    </FlexView>
  );
}

BrochureFooter.propTypes = propTypes;
BrochureFooter.defaultProps = defaultProps;

export default viewPort(BrochureFooter);
