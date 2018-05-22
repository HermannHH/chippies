QuoteRequestModal example:

```js
initialState = {
    show: false,
    items:  {
                '1' : { text: "Test", src: "https://picsum.photos/200/300/?random", qty: 1 },
                '2' : { text: "Test", src: "https://picsum.photos/200/300/?random", qty: 1 },
                '3' : { text: "Test", src: "https://picsum.photos/200/300/?random", qty: 1 },
            },
}
;
<div>
  <Button text={state.show ? "Hide" : "Show"} handleClick={() => setState({ show: !state.show})} raised whiteText color="red"/>
  {state.show &&
    <QuoteRequestModal
      closeModal={() => setState({ show: false})}
      items={state.items}
      handleQtyClickChange={(x) => setState({ [items['1']['qty']] : x.value()})}
      handleQtyTypingChange={(x) => setState({ [items['1']['qty']] : x.value()})}
    />
  }
</div>
```