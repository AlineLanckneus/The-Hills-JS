/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
        
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");


let button = document.querySelector("button");

(function changeColor() {

    button.addEventListener("click", function(){

        if(red && ()){
            red.style.backgroundColor = "red";
        } else if (green){
            green.style.backgroundColor = "green";
        } else if (yellow){
            yellow.style.backgroundColor = "yellow";
        } else if (blue){
            blue.style.backgroundColor = "blue";
        }
        
        
    });
    // your code here
})();


