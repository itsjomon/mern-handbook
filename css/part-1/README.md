#  CSS (Cascading Style Sheets)

It is a language that is used to style HTML elements. It contains **properties** that define the style rules.

## Basic Format of CSS

```css
h1 {
  color: blue;
}

/* h1 is Selector */
/* color is Property */
/* blue is Value */
```

To explore more CSS properties, check out the [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

## How to Include Styles?

### Inline Style

Writing style directly inline on each element

```html
<h1 style="color:red;"> Hello World! </h1>
```

### Using Style Tag

Style is added using the `<style>` element in the same documnet

```html
<style>
    h1 {
        color:red;
    }
</style>
```

### External Style Sheet

Writing CSS in a separate document & linking it with HTML file

```html
<head>
    <link rel="stylesheet" href="style.css">  <!-- Linking HTML with CSS File -->
</head>
```

## color

used to set the color of foreground

```css
color: purple;
color: #ffffff;
```

## background-color

used to set the color of background

```css
background-color: purple;
background-color: #ffffff;
```

## Color Systems

| Color System         | Example              |
|----------------------|----------------------|
| `Named Colors` Each browser recognizes around 140 named colors. Eg - red, blue, pink, teal etc. | `color: black;` |
| `RGB` Red Green Blue (0 - 255) | `color: rgb(255, 255, 255;` |
| `Hexadecimal or Hex` Letters: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F  Total 16 latters | `color: #ffffff;` |

## Text Properties

```css
 text-align
 font-weight
 text-decoration
 line-height
 letter-spacing
 font-size
```

### text-align

```css
text-align: left/start;
text-align: right/end;
text-align: center;
text-align: justify;
```

### font-weight

```css
font-weight: normal; /* 400 */
font-weight: bold;   /* 700 */
font-weight: 100;
font-weight: bolder;
font-weight: lighter;

/* 100 - 900 */
```

### text-decoration

sets the appearance of decorative lines on text like underline

```css
text-decoration: underline;
text-decoration: overline;
text-decoration: line-through;
```

### line-height

controls the height of the line of text

```css
line-height: normal;
line-height: 2.5; /* 2.5*normal */
```

### letter-spacing

controls the horizontal spacing behavior between text characters

```css
letter-spacing: normal;
letter-spacing: 10px;
```

### Font-size units in CSS

| Absolute | Relative       |
|----------|----------------|
| px       | %              |
| pt       | em             |
| pc       | rem            |
| cm       | ch             |
| mm       | vh             |
| in       | vw + many more |

- **Pixels (px)**

  most commonly used absolute unit

  96px = 1 inch

  not suitable for responsive websites

  ```css
  font-size: 50px;
  ```

- **font-family**

  specifies a prioritized list of one or more font family names

  ```css
  font-family: arial;
  font-family: avant garde, didot, sans-serif; /* backup family of fonts */
  ```
  
  To explore more CSS fonts, check out the [CSS Font Stack](https://www.cssfontstack.com/).
