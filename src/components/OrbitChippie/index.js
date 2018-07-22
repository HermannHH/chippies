import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexView from 'react-flexview';

import OrbitChannel from '../OrbitChannel';
import BrandedBlockIcon from '../BrandedBlockIcon';

const propTypes = {};
const defaultProps = {};

const ChannelWrapper = styled.div`
  position: absolute;
`;

function OrbitChippie() {
  return (
    <FlexView
      style={{
        height: '400px',
        width: '400px',
      }}
      hAlignContent="center"
      vAlignContent="center"
    >
      <BrandedBlockIcon size={5} />
      <ChannelWrapper>
        <OrbitChannel electronColor="red" orbitTime={8} electronRadius={10} atomRadius={200} />
      </ChannelWrapper>
      <ChannelWrapper>
        <OrbitChannel electronColor="purple" orbitTime={5} electronRadius={12} atomRadius={170} />
      </ChannelWrapper>
      <ChannelWrapper>
        <OrbitChannel electronColor="ocean" orbitTime={6} electronRadius={9} atomRadius={140} />
      </ChannelWrapper>
      <ChannelWrapper>
        <OrbitChannel electronColor="yellow" orbitTime={9} electronRadius={11} atomRadius={110} />
      </ChannelWrapper>
      <ChannelWrapper>
        <OrbitChannel electronColor="green" orbitTime={7} electronRadius={8} atomRadius={80} />
      </ChannelWrapper>
    </FlexView>
  );
}

OrbitChippie.propTypes = propTypes;
OrbitChippie.defaultProps = defaultProps;

export default OrbitChippie;
