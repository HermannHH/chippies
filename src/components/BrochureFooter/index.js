import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Shevy from 'shevyjs';


import { shevyConfig } from '../helpers';
import ColorBlock from '../ColorBlock';
import Pad from '../Pad';
import Divider from '../Divider';
import BrandedWhiteIcon from '../BrandedWhiteIcon';
import Hyperlink from '../Hyperlink';
import Small from '../Small';
import Icon from '../Icon';

const shevy = new Shevy(shevyConfig);
const { baseSpacing: bs } = shevy;

const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
`;

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

function BrochureFooter() {
  return (
    <ColorBlock
      width="100%"
      color="blue"
      shade="0"
      height="auto"
    >
      <Pad
        horizontal={{ xs: 5 }}
        vertical={{ xs: 4 }}
      >
        <Grid fluid>
          <Row middle="xs">
            <Col xs={12} md={3}>
              <Pad
                top={{ xs: 2 }}
                bottom={{ xs: 3 }}
              >
                <BrandedWhiteIcon size="6" />
              </Pad>
            </Col>
            <Col xs={12} md={9}>
              <Pad
                vertical={{ xs: 2 }}
              >
                <LinksWrapper>
                  <LinkItemWrapper>
                    <Hyperlink
                      text="Product"
                      handleClick={()=>alert('Hello Hyperlink')}
                      color="white"
                      hoverColor="grey"
                      hoverShade="0"
                    />
                  </LinkItemWrapper>
                  <LinkItemWrapper>
                    <Hyperlink
                      text="Our Purpose"
                      handleClick={()=>alert('Hello Hyperlink')}
                      color="white"
                    />
                  </LinkItemWrapper>
                  <LinkItemWrapper>
                    <Hyperlink
                      text="Pricing"
                      handleClick={()=>alert('Hello Hyperlink')}
                      color="white"
                    />
                  </LinkItemWrapper>
                  <LinkItemWrapper>
                    <Hyperlink
                      text="Blog"
                      handleClick={()=>alert('Hello Hyperlink')}
                      color="white"
                    />
                  </LinkItemWrapper>
                </LinksWrapper>
              </Pad>
            </Col>
          </Row>
          <Divider />
          <Row middle="xs">
            <Col xs={12} md={3}>
              <Pad
                top={{ xs: 2 }}
                bottom={{ xs: 1 }}
              >
                <Small color="white" shade="0">{`© ${new Date().getFullYear()} Krated (PTY) Ltd.`}</Small>
              </Pad>
            </Col>
            <Col xs={12} md={9}>
              <Pad
                top={{ xs: 1 }}
                bottom={{ xs: 2 }}
              >
                <LinksWrapper>
                  <SocialLinkItemWrapper>
                    <Hyperlink
                      icon="faFacebookSquare"
                      handleClick={()=>alert('Hello Hyperlink')}
                      color="white"
                    />
                  </SocialLinkItemWrapper>
                  <SocialLinkItemWrapper>
                    <Hyperlink
                      icon="faTwitter"
                      handleClick={()=>alert('Hello Hyperlink')}
                      color="white"
                    />
                  </SocialLinkItemWrapper>
                </LinksWrapper>
              </Pad>
            </Col>
          </Row>
        </Grid>
      </Pad>
    </ColorBlock>
  );
}

export default BrochureFooter;
