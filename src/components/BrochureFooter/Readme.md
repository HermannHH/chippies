Brochure footer default example:


```js

  const linkItems = [
    <Hyperlink
      text="Our purpose"
      handleClick={() => alert('Hello Hyperlink')}
      color="white"
      hoverColor="grey"
      hoverShade="0"
    />,
    <Hyperlink
      text="Pricing"
      handleClick={() => alert('Hello Hyperlink')}
      color="white"
      hoverColor="grey"
      hoverShade="0"
    />,
    <Hyperlink
      text="Product"
      handleClick={() => alert('Hello Hyperlink')}
      color="white"
      hoverColor="grey"
      hoverShade="0"
    />,
    <Hyperlink
      text="Blog"
      handleClick={() => alert('Hello Hyperlink')}
      color="white"
      hoverColor="grey"
      hoverShade="0"
    />
  ];

<BrochureFooter
  linkItems={linkItems}
  facebookLink="https://www.facebook.com/kratedHQ/"
  twitterLink="https://twitter.com/TeamKrated"
/>
```