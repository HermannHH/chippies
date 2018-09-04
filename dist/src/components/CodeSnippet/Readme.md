CodeSnippet example:

```js
var snip = `
  <div>
    <span>Some HTML here</span>
  </div>
`;
initialState = {
    copied: false,
}
;
<CodeSnippet
  snippet={snip}
  copied={state.copied}
  handleCopied={()=> setState({ copied: true })}
/>
```
