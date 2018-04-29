AcceptQuote default example:

```js

const data = {
    grandTotal: 'ZAR 12345.00',
    items: [
        {id: '1', name: 'Product 1', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
        {id: '2', name: 'Product 2', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
        {id: '3', name: 'Product 3', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
        {id: '4', name: 'Product 4', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
        {id: '5', name: 'Product 5', sku: 'abc123', qty: 5, itemPrice: 'ZAR 1234.00', subTotal: 'ZAR 1234.00'},
    ]
};

<AcceptQuote lineItemData={data}/>
```