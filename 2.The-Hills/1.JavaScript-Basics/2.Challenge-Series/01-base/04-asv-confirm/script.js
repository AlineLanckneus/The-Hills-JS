/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function input() {

    // your code here
    let age = prompt("What is your age?");
    let gender = prompt("What is your gender?");
    let town = prompt("In which town do you currently live?");


    let txt = alert(`Age: ${age} Gender: ${gender} Town: ${town}`);
    //let txt2 = alert("Please try again");
    let r = confirm("Please press the ok button to confirm");
    if (r === true){
        if(age && gender && town !== null){ 
        txt();
    } else {
        input();
    }
    };

})();
