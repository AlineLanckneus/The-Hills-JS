/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*const loopFruits = function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];*/
    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grape",
        "cherry",
    ];
    var i = 0;

    function nextItem() {
        console.log(fruits[i]);
        i = i + 1;
        i = i % fruits.length;
        //console.log(fruits[i]);
    }
//};

document.getElementById("run").addEventListener("click", function(){
    nextItem();
});