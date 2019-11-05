/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let numOne = document.getElementById("op-one").value;
        let numTwo =  document.getElementById("op-two").value;
        let result = Number(numOne) + Number(numTwo);// Number() method converts string to number
            alert("That adds up to: " + result);
        
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let numOne = document.getElementById("op-one").value;
        let numTwo =  document.getElementById("op-two").value;
        let result = Number(numOne) - Number(numTwo);
            alert("That is equal to: " + result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let numOne = document.getElementById("op-one").value;
        let numTwo =  document.getElementById("op-two").value;
        let result = Number(numOne) * Number(numTwo);
            alert("That is equal to: " + result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let numOne = document.getElementById("op-one").value;
        let numTwo =  document.getElementById("op-two").value;
        let result = Number(numOne) / Number(numTwo);
            alert("That is equal to: " + result);
    });
})();

/*element.addEventListener(event, listener);
    inbuilt function in javascript which takes the event to listen for,
    and a second argument to be called whenever the described event gets fired
    event: any valid Javascript event, without "on" prefix ("click" or "mouseover")
    listener(handler function): javascript function that responds to event
*/