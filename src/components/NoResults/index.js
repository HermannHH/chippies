import React from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';

import ProgressiveImage from '../ProgressiveImage';
import Heading from '../Heading';
import Button from '../Button';

const propTypes = {
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
};
const defaultProps = {
  imgSrc: null,
  handleClick: null,
  buttonText: null
};

function NoResults({ text, imgSrc, handleClick, buttonText }) {
  return (
    <FlexView vAlignContent="center" hAlignContent="center" column>
      {imgSrc && <FlexView marginBottom="25px" height="200px" width="200px"><ProgressiveImage src={imgSrc} /></FlexView>}
      <FlexView style={{padding: "0px 30px", textAlign: "center"}} width="100%">
        <Heading text={text} size="4" />
      </FlexView>
      {handleClick && buttonText &&
        <FlexView>
          <Button text={buttonText} handleClick={handleClick}/>
        </FlexView>
      }
    </FlexView>
  );
}

NoResults.propTypes = propTypes;
NoResults.defaultProps = defaultProps;

export default NoResults;
