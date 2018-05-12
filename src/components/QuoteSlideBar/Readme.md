QuoteSlideBar example:

```js
initialState = {
    show: false,
}
;
<div>
  <Button text={state.show ? "Hide" : "Show"} handleClick={() => setState({ show: !state.show})} raised whiteText color="red"/>
  <QuoteSlideBar
    show={state.show}
    numItems={3}
    handleClick={() => alert('Needs action')}
  />
</div>
```
