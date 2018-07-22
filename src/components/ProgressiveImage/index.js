import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';

const Wrapper = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: inherit;
  ${props => (props.rounded && 'border-radius: 50%')};
  background-size: ${props => props.size};
  background-position: center center;
  background-repeat: no-repeat;
  ${props => `
    background-image: url(${props.src});
  `};
`;

/**
 * Progressive image uses css background to cover or contain given div with src image
 */

function ProgressiveImage(props) {
  return (
    <Wrapper {...props} />
  );
}

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.oneOf(['cover', 'contain']),
  rounded: PropTypes.bool,
  theme: PropTypes.shape(),
};

ProgressiveImage.defaultProps = {
  theme: kratedTheme,
  height: '100%',
  width: '100%',
  size: 'cover',
  rounded: false,
};

export default ProgressiveImage;