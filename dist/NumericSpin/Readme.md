NumericSpin example:

```js
initialState = {
    value: 0,
}
;
<NumericSpin
  handleTypingChange={(e) => setState({ value: e.target.value })}
  handleClickChange={(v) => setState({ value: v.value()})}
  value={state.value}
  id="k"
/>
```
