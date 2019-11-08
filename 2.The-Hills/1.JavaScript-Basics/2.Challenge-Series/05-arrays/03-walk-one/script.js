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
//declare array outside function in global scope
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

    /*function nextItem() {
        console.log(fruits[i]);
        i = i + 1;// increase i by one
        i = i % fruits.length;// if we've gone too high, start from `0` again
        //console.log(fruits[i]);
    }
//};*/
//source: https://stackoverflow.com/questions/26944987/show-next-previous-item-of-an-array


// function below makes waaay more sense!
    function nextItem(){
        console.log(fruits[i]);
        if(i == fruits.length - 1){
            i = 0}
        else{
            i++;}
        //console.log(fruits[i]);
        };
//https://stackoverflow.com/questions/26944987/show-next-previous-item-of-an-array
document.getElementById("run").addEventListener("click", function(){
    nextItem();
});

