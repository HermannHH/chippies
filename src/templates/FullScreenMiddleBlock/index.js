import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { viewPort } from '../../../helpers';

const FullViewPortWrapper = styled.div`
  ${props => `
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 0px;
    margin: 0px;
    width: ${props.width}px;
    height: ${props.height}px;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    border: thin solid blue;
  `};
`;

const MiddleBlockWrapper = styled.div`
  ${props => `
    position: relative;
    display: block;
    margin: 0 auto;
    height: auto;
    border: thin solid red;
    box-sizing: border-box;
    width: ${props.width}px;
    ${['desktop', 'large_desktop'].includes(props.device) && `width: ${props.width / 1.5}px`};
    margin-top: ${props.height * 0.125}px;
    ${['desktop', 'large_desktop'].includes(props.device) && `margin-top: ${props.height *0.175}px`};
  `};
`;

function FullScreenMiddleBlock({
    device,
    height,
    width,
}) {
    console.log('device', device)
    return (
        <FullViewPortWrapper
          height={height}
          width={width}
        >
            <MiddleBlockWrapper
                width={width}
                device={device}
                height={height}
            >
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
            </MiddleBlockWrapper>
        </FullViewPortWrapper>
    )
}

FullScreenMiddleBlock.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    device: PropTypes.oneOf([
        'phone',
        'large_desktop',
        'desktop',
        'tablet',
        'landscape_phone',
    ])
}

export default  viewPort(FullScreenMiddleBlock);