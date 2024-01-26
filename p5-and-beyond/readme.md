# Workshop: JavaScript with P5 & Beyond (ft. HTML and CSS)

## By Sarah Hontoy-Major, January 26th 2024

### Overview

Develop an understanding of vanilla JavaScript and how to incorporate it with the P5 canvas. Using P5 functions introduced in CART-253, we will transfer user interaction to a navigation system using HTML tags, CSS styling and native JavaScript event listeners.

### Outline

1. While we set up, I will overview Vera Van de Seyp [Computational Knitting Patterns](https://www.media.mit.edu/projects/computational-knitting-patterns/overview/)'s project and its [interface](https://knit.veravandeseyp.com/), an instance of how we can make P5 and vanilla JS/HTML/CSS collaborate and utilize their respective advantages;

2. Presentation of our goal for the workshop in index.html. By the end of the workshop, we will be able to have a navigation system (with buttons) outside of our P5 canvas that impacts our (very modest) game within our P5 canvas. This navigation system will be able to impact _other_ elements outside of the P5 canvas as well.

3. Starting from the index-p5.html file, we will overview 2 ways of creating a reactive button using P5.

4. In the first method, we are using P5 rect(), text(), and a general mousePressed() event listener.

   - This is the way I would have approached doing a button when I was starting coding. It is _doable_, but not the best practice if you want to keep your patience.

5. In the second method, we are using the P5 [createButton()](https://p5js.org/reference/#/p5/createButton) function.

   - Similar to the P5 createCanvas() we know and love, this allows for a _much shorter_ code to create a dynamic HTML button. Is the button _on_ the P5 Canvas, however? How can we stylize it to our liking?

6. Overview of HTML tags (canvas, button, div, ...).

   - P5 createCanvas() and createButton() are shortcuts where P5 creates those tags for us _behind the scenes_. If we want more leeway to stylize and impact our button, we should do our _own buttons_ using manually written _HTML tags_.

7. Overview of [**tags**](https://www.w3schools.com/tags/tag_html.asp), [**classes**](https://www.w3schools.com/html/html_classes.asp), and [**ID**](https://www.w3schools.com/html/html_id.asp) attributes and selectors.
   - Tags are prebuilt in HTML. They have respective and specific attributes/functions/behaviours for each. Although _technically_ possible, it is not recommended to create your own. You have everything you need in the prebuilt HTML tags
   - Example of tags: H1-6 for headings, ul/li for lists and its items, button for buttons, a for links, div for creating containers and putting several elements in.
   - Tags may need an opening _and_ closing element (e.g., <h1> this is a heading </h1>), or only an opening element (e.g., <img src="an-image.jpg" width="500" height="600">)
