LineItems example:

```js

const content = {
    data: [
        {id: '1', name: 'Product 1', sku: 'abc123', qty: 5, itemPrice: '1234', subTotal: '1234'},
        {id: '2', name: 'Product 2', sku: 'abc123', qty: 5, itemPrice: '1234', subTotal: '1234'},
        {id: '3', name: 'Product 3', sku: 'abc123', qty: 5, itemPrice: '1234', subTotal: '1234'},
        {id: '4', name: 'Product 4', sku: 'abc123', qty: 5, itemPrice: '1234', subTotal: '1234'},
        {id: '5', name: 'Product 5', sku: 'abc123', qty: 5, itemPrice: '1234', subTotal: '1234'},
    ]
};

<LineItems content={content}/>
```