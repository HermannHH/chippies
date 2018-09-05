CardActions left example:

```js
<CardActions
  comps={[
      <Button text="Submit" handleClick={() => alert('handleClick')} />,
      <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText color="red"/>
  ]}
  layout="left"
/>
```

CardActions right example:

```js
<CardActions
  comps={[
      <Button text="Submit" handleClick={() => alert('handleClick')} />,
      <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText color="red"/>
  ]}
  layout="right"
/>
```

CardActions spread example:

```js
<CardActions
  comps={[
      <Button text="Submit" handleClick={() => alert('handleClick')} />,
      <Button text="Submit" handleClick={() => alert('handleClick')} raised whiteText color="red"/>
  ]}
  layout="spread"
/>
```