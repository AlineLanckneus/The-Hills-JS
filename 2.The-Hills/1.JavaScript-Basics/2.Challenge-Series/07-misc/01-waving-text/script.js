/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Woo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ...
//divide this text into 5 parts and give each part a bigger font size from lef to right

let text = document.getElementById("target").textContent;

console.log(text);
console.log(text.length);

let one = text.substr(0,7);
one = toString(one);
console.log(one);

let two = text.substr(8,13);
console.log(two);
let three = text.substr(14,21);
console.log(three);
let four = text.substr(22,29);
console.log(four);
let five = text.substr(30,45);
console.log(five);
