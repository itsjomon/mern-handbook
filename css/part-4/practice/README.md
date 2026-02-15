# Practice Questions 

Complete the assignment according to the instructions in the CSS file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Assignment</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="box1">This is box1</div>
    <div id="box2">This is box2</div>
    <div id="box3">This is box3</div>
    <div id="box4">This is box4</div>
    <div id="myPic">This is my Pic</div>
  </body>
</html>
```

```css
/* Qs 1. Add a 2s transition on box1 for width changes. It should have 'ease-in' speed curve & 0.5s delay  */

#box1 {
  width: 100px;
  height: 100px;
  background: green;
}

#box1:hover {
  width: 600px;
}

/* Qs 2. Using transform, move box2 200px to the right & 200px down. Also rotate it 90deg.*/

#box2 {
  width: 100px;
  height: 100px;
  background: red;
}

/* Qs 3. Using transform, skew box3 20deg along the x axis.*/

#box3 {
  width: 100px;
  height: 100px;
  background: lightblue;
}

/* Qs 4. Set a 2px horizontal & 2px vertical, green shadow for box4, with a 5px blur radius.*/

#box4 {
  width: 100px;
  height: 100px;
  background: lightgreen;
}

/* Qs 5. Set Your picture or any picture as the background of the div "myPic". Also, set transparency of this div to 50%. */

#myPic {
  width: 200px;
  height: 200px;
  background: pink;
}
```