import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';

import { shevyConfig } from '../helpers';

const shevy = new Shevy(shevyConfig);
const { content, baseSpacing: bs } = shevy;

const TableTag = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 5px;
  font-size: ${content.fontSize};
  line-height: ${content.lineHeight};
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  ${props => `
    font-family: ${props.theme.font.family};
  `};
`;

const HeadTag = styled.thead`

`;

const BodyTag = styled.tbody`

`;

const RowTag = styled.tr`

`;

const HeaderTag = styled.th`
  padding: ${bs(0.25)};
  border-collapse: collapse;
  text-align: left;
  ${props => `
    color: ${props.theme.colors.black['-1']};
    border: 1px solid ${props.theme.colors.grey['-1']};
    font-weight: ${props.theme.font.weight.bold};
  `};
`;

const DataTag = styled.td`
  padding: ${bs(0.25)};
  border-collapse: collapse;
  ${props => `
    color: ${props.theme.colors.grey['2']};
    ${!props.noBorder && `border: 1px solid ${props.theme.colors.grey['-1']}`};
    ${props.right ? 'text-align: right' : 'text-align: left'};
    font-weight: ${props.bold ? `${props.theme.font.weight.bold}` : `${props.theme.font.weight.standard}`};
  `};
`;

/**
 * Used to LineItems line items on a quotation or order
 */

function LineItems({ theme, data }) {
  return (
    <TableTag theme={theme}>
      <HeadTag>
        <RowTag theme={theme}>
          <HeaderTag theme={theme}>Name</HeaderTag>
          <HeaderTag theme={theme}>SKU</HeaderTag>
          <HeaderTag theme={theme}>QTY</HeaderTag>
          <HeaderTag theme={theme}>Item Price</HeaderTag>
          <HeaderTag theme={theme}>Sub-Total</HeaderTag>
        </RowTag>
      </HeadTag>
      <BodyTag>
        {data.items.map(x => (
          <RowTag theme={theme} key={x.id}>
            <DataTag theme={theme}>{x.name}</DataTag>
            <DataTag theme={theme}>{x.sku}</DataTag>
            <DataTag theme={theme} right>{x.qty}</DataTag>
            <DataTag theme={theme} right>{x.itemPrice}</DataTag>
            <DataTag theme={theme} right>{x.subTotal}</DataTag>
          </RowTag>

        ))}
        <RowTag>
          <DataTag theme={theme} noBorder />
          <DataTag theme={theme} noBorder />
          <DataTag theme={theme} noBorder />
          <DataTag theme={theme} right bold>Sub-Total</DataTag>
          <DataTag theme={theme} right bold>{data.grandTotal}</DataTag>
        </RowTag>
      </BodyTag>
    </TableTag>
  );
}

LineItems.propTypes = {
  theme: PropTypes.shape(),
  data: PropTypes.shape({
    grandTotal: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
      itemPrice: PropTypes.string.isRequired,
      subTotal: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,

};

LineItems.defaultProps = {
  theme: kratedTheme,
}

export default LineItems;
