/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
*/

//first option
//const changeColor = (id) => {
    //document.body.style.background = id;
    //};

    
    // your code here

//document.querySelector("button").addEventListener("click", changeColor);
//let body = document.body.addEventListener("click", changeColor);

//second option

function changeBgc(color){
    document.body.style.backgroundColor = color;
};

//both work!