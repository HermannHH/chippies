import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import kratedTheme from 'krated-theme';

import { viewPort } from '../helpers';

import EscapeButton from '../EscapeButton';

const Container = styled.div`
  ${props => `
    background-color: ${props.theme.colors.white['0']};
    position: fixed;
    top: 0px;
    left: 0px;
    width: ${props.width}px;
    height: ${props.width}px;
    z-index: 100;
  `};
`;

const EscapeWrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 25px;
`;

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.keydownEscape = this.keydownEscape.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keydown', this.keydownEscape, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownEscape, false);
  }

  keydownEscape(e) {
    e.preventDefault();
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
  }

  render() {
    const {
      show,
      width,
      height,
      children,
      theme,
      closeModal,
    } = this.props;
    return (
      <Container
        show={show}
        width={width}
        height={height}
        theme={theme}
      >
        <EscapeWrapper>
          <EscapeButton
            handleClick={closeModal}
          />
        </EscapeWrapper>
        {children}
      </Container>

    );
  }
}

Modal.propTypes = {
  theme: PropTypes.shape(),
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  theme: kratedTheme,
};

export default viewPort(Modal);
