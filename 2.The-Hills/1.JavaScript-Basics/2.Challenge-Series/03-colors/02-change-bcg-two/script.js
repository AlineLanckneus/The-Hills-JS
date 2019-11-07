/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let button = document.querySelector("input");

function changeColor() {
    let inputValue = document.getElementById("color").value;//doesn't work if i put this above the function
    console.log(typeof inputValue);
    if(inputValue){ 
    document.body.style.backgroundColor = inputValue;
    } else {
        document.body.style.backgroundColor = "black";
    }
};

//also works if i delete the code below
button.addEventListener("click", changeColor);

//source: https://stackoverflow.com/questions/17218987/changing-background-color-of-text-box-input-not-working-when-empty