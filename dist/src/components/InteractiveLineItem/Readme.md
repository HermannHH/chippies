InteractiveLineItem example:

```js
initialState = {
    value: 0,
}
;
<InteractiveLineItem
  title="I am title"
  handleTypingChange={(e) => setState({ value: e.target.value })}
  handleClickChange={(v) => setState({ value: v.value()})}
  value={state.value}
  id="itc"
/>
```