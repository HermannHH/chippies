Icon xs example:

```js
<Icon
  icon="faPlus"
  size="xs"
/>
```

Icon sm example:

```js
<Icon
  icon="faPlus"
  size="sm"
/>
```

Icon lg example:

```js
<Icon
  icon="faPlus"
  size="lg"
/>
```

Icon 1x - 10x example:

```js
const arr = Array.from(Array(10).keys())
arr.map((x, i) => (
<p>
    <Icon
    icon="faPlus"
    size={`${i + 1}x`}
    />
    {`${i + 1}x`}
</p>
))

```
