/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let result = [];
let numbers2;
let numbers = document.getElementById("numbers").value;
console.log(numbers);
console.log(typeof(numbers));

numbers2 = numbers.split(',');
console.log(numbers2);
console.log(typeof(numbers2));

for (let i = 0; i < numbers2.length; i++) {
    numbers2[i] = Number(numbers2[i]);
    result.push(+numbers2[i]);
    
}
console.log(result);
console.log(typeof(result));

function sortNumbers(a, b) {
    if (a > b) {
        return 1;//return number is positive: b will be shown before a
    } else if (b > a) {
        return -1;//return number is negative: a will be shown before b
    } else {
        return 0;//a and b will remain in the same order as when they entered the loop
    }
}

result.sort(sortNumbers);
//https://alligator.io/js/array-sort-numbers/ found the solution here
//more explaining here: https://www.w3schools.com/js/js_array_sort.asp

console.log(result);//at last!
console.log(typeof(result));


(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        document.getElementById("numbers").value = result;


    });
    
})();
