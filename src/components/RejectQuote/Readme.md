RejectQuote default example:

```js
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
  commentToggled={state.commentToggled}
  handleCommentToggle={() => setState({ commentToggled: !state.commentToggled})}
  termsChecked={state.termsChecked}
  handleTermsChecked={() => setState({ termsChecked: !state.termsChecked})}
  handleAccept={()=>alert('accepted')}
  handleReject={()=>alert('rejected')}
/>
```