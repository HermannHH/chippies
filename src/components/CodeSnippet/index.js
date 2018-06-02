import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';
import CopyToClipboard from 'react-copy-to-clipboard';

import Well from '../Well';

const Pre = styled.pre`
`;

const Code = styled.code`
`;

function CodeSnippet({
  snippet, theme,
}) {
//   function escapeHtml(text) {
//     const map = {
//       '&': '&amp;',
//       '<': '&lt;',
//       '>': '&gt;',
//       '"': '&quot;',
//       "'": '&#039;',
//     };
//     return text.replace(/[&<>"']/g, m => map[m]);
//   }

  return (
    <Well>
      <Pre><Code>{snippet}</Code></Pre>
      <CopyToClipboard
        text={snippet}
        onCopy={() => alert('copied')}
      >
        <span>Copy to clipboard with span</span>
      </CopyToClipboard>
    </Well>
  );
}

CodeSnippet.propTypes = {
  theme: PropTypes.shape(),
  snippet: PropTypes.string.isRequired,
};

CodeSnippet.defaultProps = {
  theme: kratedTheme,
};

export default CodeSnippet;
