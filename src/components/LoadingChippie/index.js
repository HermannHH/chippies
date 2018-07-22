import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexView from 'react-flexview';

import OrbitChannel from '../OrbitChannel';
import BrandedWhiteIcon from '../BrandedWhiteIcon';

const propTypes = {};
const defaultProps = {};

const ChannelWrapper = styled.div`
  position: absolute;
`;

function LoadingChippie() {
  return (
    <FlexView
      style={{
        height: '160px',
        width: '160px',
      }}
      hAlignContent="center"
      vAlignContent="center"
    >
      <BrandedWhiteIcon size={5} />
      <ChannelWrapper>
        <OrbitChannel electronColor="red" orbitTime={6} electronRadius={10} atomRadius={80} />
      </ChannelWrapper>
    </FlexView>
  );
}

LoadingChippie.propTypes = propTypes;
LoadingChippie.defaultProps = defaultProps;

export default LoadingChippie;
