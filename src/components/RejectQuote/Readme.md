RejectQuote default example:

```js

const data = {
    grandTotal: 'ZAR 12345.00',
    items: [
        {id: '1', name: 'Product 1', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
        {id: '2', name: 'Product 2', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
        {id: '3', name: 'Product 3', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
        {id: '4', name: 'Product 4', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
        {id: '5', name: 'Product 5', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
    ]
};

initialState = {
    commentToggled: false,
    termsChecked: false,
}
;
<RejectQuote
  referenceNumber="1234"
  buyer="Buyer Company ABC"
  buyerAddress="123 Main Road, Cape Town"
  buyerAgentName="Piet Pompies"
  buyerAgentNumber="+27 78 123 1234"
  buyerAgentEmail="piet@mail.com"
  seller="Seller Company ABC"
  sellerAddress="123 Main Road, Cape Town"
  sellerAgentName="Piet Pompies"
  sellerAgentNumber="+27 78 123 1234"
  sellerAgentEmail="piet@mail.com"
  lineItemData={data}
  commentToggled={state.commentToggled}
  handleCommentToggle={() => setState({ commentToggled: !state.commentToggled})}
  termsChecked={state.termsChecked}
  handleTermsChecked={() => setState({ termsChecked: !state.termsChecked})}
/>
```