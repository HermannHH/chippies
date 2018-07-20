SlideBar example:

```js
initialState = {
    show: false,
}
;
<div>
  <Button text={state.show ? "Hide" : "Show"} handleClick={() => setState({ show: !state.show})} raised whiteText color="red"/>
  <SlideBar
    show={state.show}
  />
</div>
```
