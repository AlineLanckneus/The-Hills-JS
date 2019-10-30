# READ IT
## EX 01
* Open index.html in your browser, how is the text displayed on the page?
* Look up the documentation for this function (hint: mdn)

* The write() method writes HTML expressions or JavaScript code to a document.

The write() method is mostly used for testing: If it is used after an HTML document is fully loaded, it will delete all existing HTML.

Note: When this method is not used for testing, it is often used to write some text to an output stream opened by the document.open() method. See "More Examples" below.

document.open();
document.write("<h1>Hello World</h1>");
document.close();

Using document.write() after an HTML document is fully loaded, will delete all existing HTML.

Tip: The document.writeln() method is similar to write(), only it adds a newline character after each statement.