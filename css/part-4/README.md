## Alpha Channel

Sets the opacity for a color

Ranges from 0 to 1

```css
rgba(255, 255, 255, 0.3);
```

## opacity

Sets the opacity for the element

Ranges from 0 to 1

```css
opacity: 0.5;
```

## transitions

Transitions enable you to define the transition between two states of an element

### Transition Shorthand

property name | duration | timing-function | delay

```css
transition: margin-top 2s ease-in-out 0.2;
```

## transform

This property lets you rotate, scale, skew, or translate an element

```css
/* rotate */
transform: rotate(45deg);

/* scale */
transform: scale(0.5);
transform: scale(0.5, 2);
transform: scaleX(0.5);
transform: scaleY(0.5);

/* translate */
transform: translate(50px, 50px);
transform: translateX(10px);
transform: translateY(10px);

/* skew */
transform: skew(45deg);
```

## box-shadow

It adds shadow effects around an element's frame

```css
box-shadow: 2px 2px 10px green;
```

## background-image

Lets you set an image as a background

```css
background-image: url("");

background-size: contain; /* no crop, no scale, only repeat image to fill the area */
background-size: cover; /* crop but not scale */
background-size: auto; /* stretch the image to fit */
```

## position

The position CSS property sets how an element is positioned in a document.

The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.

- static
- relative
- absolute
- fixed

### Position - Static

The top, right, bottom, left, and z-index properties have no effect.

This is the `default` value.

```css
position: static;
```

### Position - Relative

The offset is relative to itself based on the values of top, right, bottom, and left.

```css
position: relative;
```

### Position - Absolute

The element is removed from the normal document flow, and no space is created for the element in the page layout.

It is positioned `relative to its closest positioned ancestor`, if any; otherwise, it is placed relative to the initial containing block.

```css
position: absolute;
```

### Position - Fixed

The element is removed from the normal document flow, and no space is created for the element in the page layout.

It is positioned `reative to the initial containing block` established by the viewport.

```css
position: fixed;
```