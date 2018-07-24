MobileNavMenu example:

```js
initialState = {
  show: false
};
<MobileNavMenu
  openMobileNavMenu={() => setState({ show: true })}
  closeMobileNavMenu={() => setState({ show: false })}
  show={state.show}
  linkItems={[
    { text: "Hello One", handleClick: () => alert("okay") },
    { text: "Hello Two", handleClick: () => alert("okay") },
    { text: "Hello Three", handleClick: () => alert("okay") },
    { text: "Hello Four", handleClick: () => alert("okay"), type: "button" }
  ]}
/>;
```
