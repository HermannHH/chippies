import React from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';
import kratedTheme from 'krated-theme';

import Button from '../Button';
import Heading from '../Heading';
import viewPort from '../viewPort';

const propTypes = {
  theme: PropTypes.shape({}),
  backgroundColor: PropTypes.string,
  backgroundShade: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonShade: PropTypes.string,
  desktopAndUp: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
const defaultProps = {
  theme: kratedTheme,
  backgroundColor: 'grey',
  backgroundShade: '-2',
};

function CallToActionFooter({
  desktopAndUp,
  theme,
  backgroundColor,
  backgroundShade,
  handleClick,
  text,
  buttonText,
  buttonColor,
  buttonShade,
}) {
  return (
    <FlexView
      hAlignContent="center"
      vAlignContent="center"
      column
      style={{
        padding: `${desktopAndUp ? '10%' : '15% 5%'}`,
        backgroundColor: `${theme.colors[backgroundColor][backgroundShade]}`,
      }}
    >
      <FlexView marginTop="30px" style={{ textAlign: 'center' }}>
        <Heading text={text} withMargin={false} size="3" />
      </FlexView>
      <FlexView marginTop="30px">
        <Button
          text={buttonText}
          handleClick={handleClick}
          raised
          whiteText
          color={buttonColor}
          shade={buttonShade}
        />
      </FlexView>
    </FlexView>
  );
}

CallToActionFooter.propTypes = propTypes;
CallToActionFooter.defaultProps = defaultProps;

export default viewPort(CallToActionFooter);
