/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


let button = document.getElementById("run");

button.addEventListener("click", function(){
    window.lib.getPosts(function(error, articles){
        console.log(articles);
    });
})

/*
window.lib.getPosts() is a function that's available (in callback.js)
this function has to receive a callback parameter (which apparently also has to
    be a function). This function gets executed with 2 parameters (the first contains an error, so let's just call this 'error';
    the second one shows an array of articles so let's just call this articles).
    when you call this function display the items in the console.
    So let's do console.log(articles) inside this function.
    Finally, let's connect all of this to clicking the button.

*/