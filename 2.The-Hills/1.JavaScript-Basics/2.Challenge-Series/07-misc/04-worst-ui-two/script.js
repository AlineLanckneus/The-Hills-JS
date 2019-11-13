/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
var btn1 = document.getElementById("part-one");
var btn2 = document.getElementById("part-two");
var btn3 = document.getElementById("part-three");
var btn4 = document.getElementById("part-four");
var counter = 1;

document.querySelectorAll("actions").onclick = function showbtnvalue(){
    let btn1val = document.getElementById("part-one").value++;
    let btn2val = document.getElementById("part-two").value++;
    let btn3val = document.getElementById("part-three").value++;
    let btn4val = document.getElementById("part-four").value++;
    let btn5val = document.getElementById("part-five").value++;
    //document.getElementById("target").innerHTML = btn1val;
}

/*var btn1 = document.getElementById("part-one").value;
var btn2 = document.getElementById("part-two").value;
var btn3 = document.getElementById("part-three").value;
var btn4 = document.getElementById("part-four").value;*/


document.getElementById("target").innerHTML = `${btn1val}${btn2val}${btn3val}${btn4val}${btn5val}`;