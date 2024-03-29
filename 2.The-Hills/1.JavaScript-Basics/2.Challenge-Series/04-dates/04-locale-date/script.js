/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

let d = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
let n = d.toLocaleDateString('en-EN', options);


document.getElementById("target").innerHTML = n;

//https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString