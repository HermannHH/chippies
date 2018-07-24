MobileNavMenu example:

```js
initialState = {
  show: false
};
<div>
  <Button
    text={state.show ? "Hide" : "Show"}
    handleClick={() => setState({ show: !state.show })}
    raised
    whiteText
    color="red"
  />
  <MobileNavMenu
    closeMobileNavMenu={() => setState({ show: false })}
    show={state.show}
  >
    Hello World
  </MobileNavMenu>
</div>;
```
