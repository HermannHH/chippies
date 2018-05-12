import React from 'react';
import PropTypes from 'prop-types';
// import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

import Button from '../Button';
import SlideBar from '../SlideBar';
import Label from '../Label';
import PoweredByKrated from '../PoweredByKrated';

const IconContainer = styled.div`
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  display: inline-block;
  box-sizing: border-box;
  padding-top: 9px;
  margin: 0px 15px;
`;

const ActionsContainer = styled.div`
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  display: inline-block;
  box-sizing: border-box;
  padding-top: 7px;
  
  > * {
    display: inline;
    margin: 0px 20px;
  }
`;

function QuoteSlideBar({
  show,
  numItems,
  handleClick,
}) {
  return (
    <SlideBar
      show={show}
    >
      <IconContainer>
        <PoweredByKrated />
      </IconContainer>
      <ActionsContainer>
        <Label text={`${numItems} items added`} color="white" shade="0" />
        <Button text="Continue" handleClick={handleClick} raised whiteText color="red" />
      </ActionsContainer>
    </SlideBar>
  );
}

QuoteSlideBar.propTypes = {
  show: PropTypes.bool.isRequired,
  numItems: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default QuoteSlideBar;
