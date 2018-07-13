AppBar default example:


```js
  const navItems = [
    <Hyperlink
      text="Our purpose"
      handleClick={() => alert('Hello Hyperlink')}
      color="grey"
      hoverColor="blue"
      hoverShade="0"
    />,
    <Hyperlink
      text="Pricing"
      handleClick={() => alert('Hello Hyperlink')}
      color="grey"
      hoverColor="blue"
      hoverShade="0"
    />,
    <Hyperlink
      text="Product"
      handleClick={() => alert('Hello Hyperlink')}
      color="grey"
      hoverColor="blue"
      hoverShade="0"
    />,
    <Button
      text="Request a demo"
      handleClick={() => alert('handleClick')}
      raised
      whiteText
      color="red"
    />
  ];

<AppBar 
  navItems={navItems}
  shadowDropIn
  handleLogoClick={() => alert('handleClick')}
/>
```