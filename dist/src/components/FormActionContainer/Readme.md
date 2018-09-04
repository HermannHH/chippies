FormIActionontainer example:

```js
<FormActionContainer
  actions={[
    <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText/>,
    <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText color="red"/>
  ]}
/>
```