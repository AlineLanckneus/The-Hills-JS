# Title: SASS:

- Repository: `challenge-sass`
- Type of Challenge: `Learning Challenge`
- Duration: `1 day`
- Deployment strategy : - Github page
- Team challenge : `solo`

## Learning objectives

- Being able to explain what a CSS-Preprocessor is
- Generate some CSS from your CSS preprocessor (SASS)
- Being able to minify your CSS output
- Knowledge of the following SASS features:
  - Variables
  - Mixins (Functions)
  - Nesting
  - Partials & Import
  - Extend/Inheritance
  - Operators (Math)

## The Mission

You will learn more about SASS with the included index.html file, be sure to read it for more information.

Install Sass with the instructions found on https://sass-lang.com/install

After the installation type `sass -v` in the console, it should display the latest version.
you have to run commands to watch the files

`sass --watch input.scss output.css (single file)`

`sass --watch app/sass:public/stylesheets (entire directory)`

## Must-have features

Your mission is to rewrite the example.css to a scss file with the following changes:

### Part 1

- Make one mixin for the 3 lines of the box-shadow styling.

- Make the general padding the same everywhere with one variable. (red=16px, blue=8px), the footer h6 should have double the padding of the other elements. Use "operations" to do this. Do NOT hardcode the padding inside your scss.

- Nest the styling rules of grouped elements, like the sections in the Article.

- Make use of extend to re-use the same CSS for the "success", "error" and "warning" messages.

### Part 2 - the tricky part!

- In the HTML, add 2 links called "blue" & "red".
- Clicking one of the 2 links should change the text to red/blue with a good matching background (keep it readable)!
  All the other CSS should be the same, to do this combine SASS variables with file imports.

Take some time to think how to do the structure of this exercise, and how many files you will need. It might be good to discuss this with your fellow juniors!

### Part 3 (optional)

- Add an option to your compilation to minify your stylesheet!
  Mine was below 1.6k, can you do better? Do you still remember the option to `ls` to make the filesize Human readable?
