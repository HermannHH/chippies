LonelyIsland example:

```js
height = 100;
<div style={{height: `${height * 2}px`}}>
<LonelyIsland
  height={height}
/>
</div>
```


LonelyIsland with custom distance from top example:

```js
height = 100;
<div style={{height: `${height * 2}px`}}>
<LonelyIsland
  height={height}
  topCoords={{
    phone: 100,
    large_desktop: 100,
    desktop: 100,
    tablet: 100,
    landscape_phone: 100
  }}/>
</div>
```
