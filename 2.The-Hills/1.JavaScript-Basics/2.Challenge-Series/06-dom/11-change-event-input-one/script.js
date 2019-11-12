/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function changeSomething(){
    //console.log("typing");
    var count = document.getElementById("pass-one").value.length;
    //limit to 10 by adding maxlength attribute to input element
    //deleted maxlength = 10 attribute and replaced it with if conditional below
    if(count >= 10){
        document.getElementById("pass-one").value = document.getElementById("pass-one").value.substr(0, 9);
    }
    
    document.querySelector(".indicator").innerHTML = count + "/10";
;}

document.getElementsByName("pass-one")[0].addEventListener("input", function(){
    changeSomething();
});