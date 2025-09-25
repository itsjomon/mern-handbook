# Flex Box
Flexible Box Layout

It is a one-dimensional layout method for arranging items in rows or columns.

## Flex Direction
It sets flex items are placed in the flex container, along which axis and direction.

```css
flexbox-direction: row; /* main axis, left to right */

flexbox-direction: row-reverse; /* main axis, right to leftt */

flexbox-direction: column; /* main axis, top to bottom */

flexbox-direction: column-reverse; /* main axis, bottom to top */

```

## Justify Content
Tells the browser distributed space between and around content items along the main axis.

```css
justify-content: flext-start;

justify-content: flext-end;

justify-content: center;

justify-content: space-between;

justify-content: space-around;

justify-content: space-evenly;
```

## Flex Wrap
Sets whether flex items are forced onto one line or can wrap onto multiple lines.

```css
flex-wrap: nowrap;

flex-wrap: wrap;

flex-wrap: wrap-reverse;
```

## Align Items
Distributes our items along the cross axis.

```css
align-items: flext-start;

align-items: flext-end;

align-items: center;

align-items: baseline;
```

## Align Content
It sets the distribution of space between and around content items along a flexbox's cross axis.

```css
align-content: flex-start/flex-end/center;

align-content: space-between/space-around/evenly;

align-content: baseline;
```

## Align Self
Align an item along the cross axis.

```css
align-self: flex-start;

align-self: flex-end;

align-self: center;

align-self: baseline;
```

## Flex Sizing

- flex-basis

    It sets the initial main size of a flex item.

    ```css
    flex-basis: 100px;
    ```

- flex-grow

    It specifies how much of the flex container's remaining space should be assigned to the flex item's main size

    ```css
    flex-grow: 1;
    ```

- flex-shrink

    It sets the flex shrink factor of a flex item.

    ```css
    flex-shrink:`;
    ```

- **Flex Shorthand**

    - flex-grow | flex-shrink | flex-basis

        ```css
        flex: 2 2 100px;
        ```

    - flex-grow | flex-basis

        ```css
        flex: 2 100px;
        ```

    - flex-grow (unitless)

        ```css
        flex: 2;
        ```

    - flex-basis

        ```css
        flex: 100px;
        ```