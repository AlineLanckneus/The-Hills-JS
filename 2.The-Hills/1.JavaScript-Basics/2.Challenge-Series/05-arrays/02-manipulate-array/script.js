/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const manipulateFruit = function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    var fruits1 = fruits.shift();
    console.log(fruits);

    var fruits2 = fruits.pop();
    console.log(fruits);
    var fruits3 = fruits.unshift("Banana");
    console.log(fruits);
    var fruits4 = fruits.push("Kiwi");

    //return fruits;
    console.log(fruits);
};

document.getElementById("run").addEventListener("click", function(){
    manipulateFruit();
})