/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//initialize empty array
let oneToHundred = [];
//populate it with values 1 to 100
for (let value = 1; value <= 100; value++) {
    oneToHundred.push(value);
}
console.log(oneToHundred);
//source: https://stackoverflow.com/questions/33544993/i-want-to-print-1-to-100-numbers-using-arrays-in-javascript-only

(function() {

    // your code here
    oneToHundred.forEach(function(item){
        if ((item%3 == 0) && (item%5 == 0) ){ // fizzbuzz would only work with the additional parentheses around item%3==0 and item%5==0
            console.log("fizzbuzz");
        } else if (item%5 == 0){
            console.log("buzz");
        } else if (item%3 == 0){
            console.log("fizz");
        } else {
            console.log(item);
        }
    });

})();
