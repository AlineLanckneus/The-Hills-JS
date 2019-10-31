# FIX IT
## EX 02
* There is nothing displayed on the screen, try to fix this.
* Why isn't 'The 10 most popular tv show' displayed on the screen? Fix it!

document.write("<h1>The amount most popular tv shows</h1>");
const amount = 10;

needs to look like this:

const amount = 10;

document.write(`<h1>The ${amount} most popular tv shows</h1>`);

--> first declare const amount
add backticks and template literal to 'inject' amount

--> index html in head tag: add script <script src="js/script.js"></script>