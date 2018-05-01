FlexPosition left example:

```js
<FlexPosition
  comps={[
      <Button text="Submit" handleClick={() => alert('handleClick')} />,
      <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText/>,
      <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText color="red"/>
  ]}
  layout="left"
/>
```


FlexPosition right example:

```js
<FlexPosition
  comps={[
      <Button text="Submit" handleClick={() => alert('handleClick')} />,
      <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText/>
  ]}
  layout="right"
/>
```

FlexPosition spread example:

```js
<FlexPosition
  comps={[
      <Button text="Submit" handleClick={() => alert('handleClick')} />,
      <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText/>
  ]}
  layout="spread"
/>
```
