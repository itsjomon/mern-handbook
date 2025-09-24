# HTML
HTML (HyperText Markup Language) is the standard language for structuring and organizing content on the web, giving webpages their meaning and structure.

## HTML Boilerplate
This is the standard format or skeleton of writing HTML code.

```html
<!DOCTYPE html> <!-- html version (html5) -->
<html> <!-- html tag (root tag) -->
    <head> <!-- stores metadata (data about data) -->
        <title>Document</title> <!-- title tag to display name of the website -->
    </head>
    <body> <!-- body tag-->
        <p>Hello Word!</p> <!-- paragraph tag -->
    </body>
</html>
```

## Tags, Elements, etc...
- *HTML Elements* : The Standard elements that browser recognizes.
- *HTML tags* : A container for some content or other tags.
- *Attributes* : These are used to add more information to the tag.<br>
    example:
    ```html
    <html lang="en">
    <p>This is a paragraph.</p>
    ```
    - `<p>` is Opening tag
    - `This is a paragraph.` is the Content
    - `</p>` clossing tag
    - The entire Structure (`<p>....</p>`) is an HTML element
    - `lang="en"` is an attribute where `lang` is the attribute name and `"en"` is its value. It works with either double quotes (`lang="en"`) or single quotes (`lang='en'`) around the value. Both are valid in HTML