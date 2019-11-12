/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function listen(){

    var regex = /\d{2}/;
    var input = document.getElementById("pass-one").value;
    var count = document.getElementById("pass-one").value.length;

    if(count >= 8 && (regex.test(input) === true)){
        document.querySelector(".indicator").innerHTML = "ok";
    } else {
        document.querySelector(".indicator").innerHTML = "not ok";
    }
    
};

document.getElementsByName("pass-one")[0].addEventListener("input", function(){
    listen();
});

//regex source: https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4