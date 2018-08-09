import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import ReactPlaceholder from 'react-placeholder';
import kratedTheme from 'krated-theme';
// import shevyConfig from '../shevyConfig';

import Heading from '../Heading';
import HeadingGroup from '../HeadingGroup';
import CardPad from '../CardPad';

// const shevy = new Shevy(shevyConfig);
// const {
//   h1, h2, h3, h4, h5, h6,
// } = shevy;

const CardTitleWrapper = styled.div`
  width: 100%;
  > * {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

function CardTitle({ text, theme, subText }) {
  return (
    <CardTitleWrapper theme={theme}>
      <CardPad>
        {subText ?
          <HeadingGroup mainText={text} subText={subText} withMargin={false} size="5" />
          :
          <Heading text={text} size="5" withMargin={false} />
        }
      </CardPad>
    </CardTitleWrapper>
  );
}

CardTitle.propTypes = {
  theme: PropTypes.shape(),
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

CardTitle.defaultProps = {
  theme: kratedTheme,
  subText: undefined,
};

export default CardTitle;
