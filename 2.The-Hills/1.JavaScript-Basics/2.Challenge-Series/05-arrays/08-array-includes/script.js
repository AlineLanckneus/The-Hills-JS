/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

//The includes() method determines whether an array includes a certain element, 
//returning true or false as appropriate.

function includesApple(){
    if(fruits.includes("apple")){
        console.log("Yes")
    } else {
        console.log("Nope");
    }
}
document.getElementById("run").addEventListener("click", function(){
    includesApple();
});