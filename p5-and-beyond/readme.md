# Workshop: JavaScript with P5 & Beyond (ft. HTML and CSS)

## By Sarah Hontoy-Major, January 26th 2024

### Overview

Develop an understanding of vanilla JavaScript and how to incorporate it with the P5 canvas. Using P5 functions introduced in CART-253, we will transfer user interaction to a navigation system using HTML tags, CSS styling and native JavaScript event listeners.

### Outline

1. While we set up, we will overview Vera Van de Seyp [Computational Knitting Patterns](https://www.media.mit.edu/projects/computational-knitting-patterns/overview/)'s project and its [interface](https://knit.veravandeseyp.com/), an instance of how we can make P5 and vanilla JS/HTML/CSS collaborate and utilize their respective advantages;

2. Presentation of our goal for the workshop in index.html. By the end of the workshop, we will be able to have a navigation system (with buttons) outside of our P5 canvas that impacts our (very modest) game within our P5 canvas. This navigation system will be able to impact _other_ elements outside of the P5 canvas as well.

3. Starting from the index-p5.html file, we will overview 2 ways of creating a reactive button using P5.

4. In the first method, we are using P5 rect(), text(), and a general mousePressed() event listener.

   - This is the way I would have approached doing a button when I was starting coding. It is _doable_, but not the best practice if you want to keep your patience.

5. In the second method, we are using the P5 [createButton()](https://p5js.org/reference/#/p5/createButton) function.

   - Similar to the P5 createCanvas() we know and love, this allows for a _much shorter_ code to create a dynamic HTML button. Is the button _on_ the P5 Canvas, however? How can we stylize it to our liking?

6. Exploring how P5 creates HTML tags _for us_ (canvas, button, ...).

   - P5 createCanvas() and createButton() are shortcuts where P5 creates those tags for us _behind the scenes_. If we want more leeway to style and impact our button, we should do our _own buttons_ using manually written _HTML tags_.

7. Overviewing of [**tags**](https://www.w3schools.com/tags/tag_html.asp), [**classes**](https://www.w3schools.com/html/html_classes.asp), and [**ID**](https://www.w3schools.com/html/html_id.asp) attributes and selectors. These tag names, class names, and IDs can be used to select elements in JavaScript and CSS very easily.

   - Tags are prebuilt in HTML. They have respective and specific attributes/functions/behaviours for each. Although _technically_ possible, it is not recommended to create your own. You have everything you need in the prebuilt HTML tags

     - Example of tags: H1-6 for headings, img for images, button for buttons, a for links, div for creating containers and putting several elements in.
     - Tags may need an opening _and_ closing element (e.g., h1, a, ...), or only an opening element (e.g., img)

   - Classes are used when you want to have different elements behave and look the same as eachother. Add the name of the class inside the opening tag. You are now able to select it in your CSS file using a dot before its name.

     - Class names are arbitrarily chosen. You can name them whatever you want. The convention is to use hyphen to name the element to which its associated, and underscores to specify its function. It's ultimately up to you, as long as you make sure the name is the same everywhere you call it.

   - IDs are used when you want _one_ element to behave and look differently than the rest. IDs **cannot be used on more than one element on your page**, it will break your code. Add the name of the ID in the opening tag. You are now able to select it in your CSS file using a # before its name.

   - ID styling **overwrites** class styling. This means that you can style a _default_ style for all elements having the same class, and specify certain _custom_ styling properties using one element's unique ID.

8. Creating a command-board HTML container using a div tag and an ID;

9. Creating a button tag to go left + a button tag to go right, with a general class name and a respectively specific ID name.

10. Revising tags, classes, and ID selectors in your CSS stylesheet.

    - Tag names can be selected as is;
    - Class name should have a dot in front of them;
    - IDs should have a # in front of them
    - There are **[many](https://www.w3schools.com/cssref/css_selectors.php)** different selectors prebuilt in CSS, you should have a look.

11. Considering how P5 uses its functions to impact the CSS style of the document.

    - P5 fill() === CSS background-color;
    - P5 stroke(),strokeWeight(), noStroke(), ... === CSS border;
    - P5 rect(x, y, w, h, r) === CSS bottom/top, CSS left/right, CSS height, CSS width, CSS border-radius

    - N.B. : The best (and only?) way to learn CSS is with documentation and trial-and-error. Have [W3](https://www.w3schools.com/css/default.asp)'s CSS section on speed-dial at all times is my way to go.

12. Exploring how _very little_ CSS code allows extensive styling options when using the right selector.

    - The [:hover](https://www.w3schools.com/cssref/sel_hover.php) selector allows for specific styling _only_ when the cursor is above the element (this could be done with a _very lengthy_ P5 if() statement);
    - The [:active](https://www.w3schools.com/cssref/sel_active.php) selector allows for a specific styling _only_ when the element has been activated (in the case of a button, the styling happens once you click the button for a very short period. This could be done using a length P5 if() statement and a setTimeout() function.)

13. Creating an event listener using [HTML Event Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)

    - There are _many_ ways to create an event listener for an HTML element using JavaScript. While documenting yourself, you will likely find ways to create an [HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) using the native AddEventListener() JS function. Both can be used, and they ultimately function similarly. They are just _called_ in different places: an HTML event attribute is called in your .html file inside of a tag element, whereas the DOM event listener is called in your script.
    - To create an HTML event listener, look up on the [documentation page](https://www.w3schools.com/tags/ref_eventattributes.asp) what is the specific event you want to be listening to.
    - Use the naming convention of that event listener and insert it inside the tag of the HTML element you want to target.
    - Attribute the name of a function to that event. Similarly to callbacks you would write in your script, this will specify to your JavaScript file that some actions should be taken once we have clicked the button. This function is arbitrarily named; you just have to make sure its name is identical throughout your project.

      - This action is very similar to the P5 function MousePressed(). However, the P5 MousePressed() function **cannot** be used to know if we have pressed outside of the canvas. We cannot use it to know if we have clicked on something else, like our new and improved command board.

    - Write up the behaviour you would like to happen once you click the button, inside of function's definition in your script

    ### Bonus

    1. Changing the position of the command board.

       - It is now **much easier** to edit how our command board looks. Want to put it on the top of your screen? Just change its bottom/top position in your CSS stylesheet and _everything_ inside of the container will behave accordingly. You don't need to change all the x, y, positions, rect(), ..., anymore.

    2. Adding a new button and changing things _outside_ the Canvas
       - Now that your navigation is outside of the P5 Canvas, you can impact things _everywhere_ on your website's document. A new navigatable button could then make objects appear & disappear, or behave in all sorts of ways, anywhere on your page.
