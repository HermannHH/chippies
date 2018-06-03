import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';
import CopyToClipboard from 'react-copy-to-clipboard';
import Ink from 'react-ink';

import Paragraph from '../Paragraph';
import Pad from '../Pad';
import Label from '../Label';

const Container = styled.div`
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  ${props => `
    border-radius: ${props.theme.borders.radius}px;
    border: ${`thin solid ${props.theme.colors.grey['-1']}`};
  `};
`;

const Pre = styled.pre`
  margin: 0px;
  margin-top: -33px;
  padding: 20px;
`;

const Code = styled.code`
  
`;

const Copier = styled.button`
  position: relative;
${props => `
    border-radius: 0px 0px ${props.theme.borders.radius}px ${props.theme.borders.radius}px;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
    display: inline-block;
    text-decoration: none;
    user-select: none;
    width: 100%;
    background-color: ${props.copied ? 'inherit' : props.theme.colors.blue['0']};
    ${!props.copied && `box-shadow: ${props.theme.box.shadow.shallow}`};
    &:disabled {
      background-color: 'inherit';
      border-top: ${`thin solid ${props.theme.colors.grey['-1']}`};
      box-shadow: none;
      cursor: not-allowed;
    }
  `}
`;

function CodeSnippet({
  snippet, theme, copied, handleCopied,
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
    <Container theme={theme}>
      <Pre><Code><Paragraph withMargin={false}>{snippet}</Paragraph></Code></Pre>
      <CopyToClipboard
        text={snippet}
        onCopy={handleCopied}
      >
        <Copier theme={theme} copied={copied} disabled={copied}>
          <Pad vertical={{ xs: 2 }} horizontal={{ xs: 4 }}>
            {!copied &&
              <Ink />
            }
            <Label text={copied ? 'Copied to clipboard' : 'Copy to clipboard'} color={copied ? 'blue' : 'white'} shade="0" />
          </Pad>
        </Copier>
      </CopyToClipboard>
    </Container>
  );
}

CodeSnippet.propTypes = {
  theme: PropTypes.shape(),
  snippet: PropTypes.string.isRequired,
  copied: PropTypes.bool,
  handleCopied: PropTypes.func.isRequired,
};

CodeSnippet.defaultProps = {
  theme: kratedTheme,
  copied: false,
};

export default CodeSnippet;
