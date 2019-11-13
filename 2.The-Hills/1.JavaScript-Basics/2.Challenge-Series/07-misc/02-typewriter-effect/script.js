/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

setTimeout allows us to run a function once after the interval of time.
setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
 */

var i = 0; //Makes sure you start from the very beggining of the paragraph.
var text = document.getElementById("target").textContent;
console.log(text);
console.log(typeof text);
var speed = 70; //Of course you can choose your own speed, 0 = instant, the more you add the slower it gets. =speed/duration of the effect in milliseconds

function typeWriter() {
    if (i < text.length) {
        document.getElementById('target').innerHTML += text.charAt(i);
        i++;
    }
    setTimeout(typeWriter, speed);
}
//SYNTAX let timerId = setTimeout(func, [delay], [arg1], [arg2], ...)
//no brackets after func!That doesn’t work, because setTimeout expects a reference to a function. And  func() runs the function, and the result of its execution is passed to setTimeout. In our case the result of func() is undefined (the function returns nothing), so nothing is scheduled.
typeWriter();