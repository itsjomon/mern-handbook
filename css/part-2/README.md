## CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

### Simple selectors (Select elements based on name, id, class)

- **Universal Selector**

  To select everything in a document

  ```css
  * {
    property: value;
  }
  /* * is Universal Selector */
  ```

- **Element Selector**

  ```css
  h1 {
    property: value;
  }
  /* h1 is Elemet Selector*/
  ```

- **ID Selector**

  Selects an element based on the value of the element's id attribute

  It is case sensitive. eg: `#myid` & `#MYID` both are not same

  ```css
  #myid {
    property: value;
  }
  /* #myid is ID Selector*/
  ```

- **Class Selector**

  Selects an element based on their class attribute

  ```css
  .myclass {
    property: value;
  }
  /* .myclass is Class Selector*/
  ```

### Combinator selectors (select elements based on a specific relationship between them)

- **Descendant Selector (space)**

  It is used to select elements that are descendants of a specified element.

  Eg - Selects all paragraphs inside divs

  ```css
  div p{
    property: value;
  }
  /* div p is Descendant Selector */
  ```

- **Adjecent/Next Sibling Combinator (+)**

  The adjacent sibling selector selects an element that is immediately next to a specified element.

  Eg - Heading3 that comes immediately after any paragraph

  ```css
  p + h3{
    property: value;
  }
  /* p + h3 is Sibling Combinator */
  ```

- **Child Combinator (>)**

  The child combinator selects all elements that are the children of a specified element.

  Eg - Selects all buttons which are direct children of spans

  ```css
  span > button{
    property: value;
  }
  /* span > button is Child Combinator */
  ```

### Attribute selectors (select elements based on an attribute or attribute value)

**Attribute Selector**

Eg - Selects elements based on the presence or value of a given attribute

```css
input[attr="value"]{
  property: value;
}
```

Visit <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors">mdn attribute selectors</a>

## Pseudo class

A keyword added to a selector that specifies a special state of the selected element(s)

```css
:hover
:active
:checked
:nth-of-type
```

Visit <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">mdn pseudo classes</a>

## Pseudo Elements

A keyword added to a selector that lets you style a specific part of the selected element(s)

```css
::first-letter
::first-line
::selection
```

Visit <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements">mdn pseudo elements</a>

## Cascading

### What is cascade in CSS?

The `CSS cascade algorithm's` job is to select CSS declarations in order to determine the correct values for CSS properties.

### What is specificity?

Specificity is an algorithm that calculates the weight that is applied to a given CSS declaration.

```css
h2 {
    background-color: yellow;
}
h2 {
    background-color: blue;
}

/* final color is blue */
```

### Cascading

When multiple styles apply, the last one (in order) wins if specificity is equal.

### Multiple CSS files

The last linked file overrides earlier ones.

### Specificity order

`Inline > ID > Class > Tag`

## !important in CSS

To show the most specific thing in the document.

```css
h2 {
     background-color: "black !important";
   }
```

The !important rule in CSS is used to add more importance to a property/value than normal.

In fact, if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!

## CSS Inheritance

Inheritance means some CSS properties are automatically passed from a parent element to its children.

- **Common inherited properties** : `color`, `font-family`, `line-height`
- **Not all properties inherit** : Layout-related ones like `margin`, `padding`, `border` do not inherit by default.
- You can force inheritance using `inherit` keyword:

  ```css
  p {
    border: inherit;
  }
  ```