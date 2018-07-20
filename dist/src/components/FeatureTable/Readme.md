FeatureTable example:

```js
const cells = [
  { key: "1", elem: null, type: "heading" },
  { key: "2", elem: <Heading text="Free" size="5" />, type: "heading" },
  { key: "3", elem: <Heading text="Free" size="5" />, type: "heading" },
  { key: "4", elem: <Heading text="Free" size="5" />, type: "heading" },
  { key: "5", elem: <Heading text="General" size="5" />, type: "section" },
  { key: "6", elem: null, type: "section" },
  { key: "7", elem: null, type: "section" },
  { key: "8", elem: null, type: "section" },
  {
    key: "9",
    elem: <Icon icon="faCheckCircle" color="blue" />,
    type: "default"
  },
  { key: "10", elem: <Heading text="Free" size="5" />, type: "default" },
  { key: "11", elem: <Heading text="Free" size="5" />, type: "default" },
  { key: "12", elem: <Heading text="Free" size="5" />, type: "default" }
];
<FeatureTable cells={cells} />;
```
