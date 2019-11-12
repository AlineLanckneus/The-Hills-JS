/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
function removeDuplis(){ 
let result = fruits.sort().reduce((prev, cur) => {
    const length = prev.length;
    if(length === 0 || prev[length - 1] !== cur) {
        prev.push(cur);
    }
    return prev;
}, []);
console.log(result);
};
document.getElementById("run").addEventListener("click", function(){
    removeDuplis();
});