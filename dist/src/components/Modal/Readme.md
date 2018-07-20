Modal example:

```js
initialState = {
    show: false,
}
;
<div>
  <Button text={state.show ? "Hide" : "Show"} handleClick={() => setState({ show: !state.show})} raised whiteText color="red"/>
  {state.show &&
    <Modal
       closeModal={() => setState({ show: false})}
    >
        Hello World
    </Modal>
  }
</div>

```
