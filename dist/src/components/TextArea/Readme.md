TextArea standard example:

```js
initialState = {
    value: ''
}
;
<TextArea
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
/>
```


TextArea with error example:

```js
initialState = {
    value: ''
}
;
<TextArea
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
  errors={["I am error one", "I am error two"]}
/>
```

TextArea with label example:

```js
initialState = {
    value: ''
}
;
<TextArea
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
  label="Hello World"
/>
```

TextArea with label & error example:

```js
initialState = {
    value: ''
}
;
<TextArea
  placeholder="I am placeholder"
  handleChange={(e) => setState({ value: e.target.value })}
  value={state.value}
  label="Hello World"
  errors={["I am error one", "I am error two"]}
/>
```