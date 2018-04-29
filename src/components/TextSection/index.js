import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';
import HeadingGroup from '../HeadingGroup';
import Paragraph from '../Paragraph';

function TextSection({
 heading, subHeading, children, size,
}) {
  return (
    <div>
      {subHeading ? <HeadingGroup mainText={heading} subText={subHeading} size={size} /> : <Heading text={heading} size={size} />}
      <Paragraph>
        {children}
      </Paragraph>
    </div>
  );
}

TextSection.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};

TextSection.defaultProps = {
  subHeading: undefined,
  size: '3',
};

export default TextSection;
