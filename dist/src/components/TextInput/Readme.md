TextInput standard example:

```js
initialState = {
    value: ''
}
;
<TextInput
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
/>
```


TextInput with error example:

```js
initialState = {
    value: ''
}
;
<TextInput
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
  errors={["I am error one", "I am error two"]}
/>
```

TextInput with label example:

```js
initialState = {
    value: ''
}
;
<TextInput
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
  label="Hello World"
/>
```

TextInput with label & error example:

```js
initialState = {
    value: ''
}
;
<TextInput
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
  label="Hello World"
  errors={["I am error one", "I am error two"]}
/>
```