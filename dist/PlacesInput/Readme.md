PlacesInput without error example:

```js
initialState = {
    value: ''
}
;
<PlacesInput
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
  errors={[]}
  label="Hello World"
/>
```

PlacesInput with error example:

```js
initialState = {
    value: ''
}
;
<PlacesInput
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
  errors={["I am error one", "I am error two"]}
  label="Hello World"
/>
```