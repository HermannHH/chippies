Checkbox checked example:

```js

initialState = {
    isChecked: true
}
;
<Checkbox isChecked={state.isChecked} handleChange={() => setState({ isChecked: !state.isChecked})} label="Hello world"/>
```


Checkbox unchecked example:

```js
initialState = {
    isChecked: false
}
;
<Checkbox isChecked={false} handleChange={() => setState({ isChecked: !state.isChecked })} label="Hello world" />
```

Checkbox checked with label on right example:

```js
<Checkbox isChecked handleChange={() => alert('needs action')} labelPosition="right" label="Hello world"/>
```


Checkbox unchecked with label on right example:

```js
<Checkbox isChecked={false} handleChange={() => alert('needs action')} labelPosition="right" label="Hello world" />
```