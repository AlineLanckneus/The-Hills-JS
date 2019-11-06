/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let n;
let result;

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        function factorial(n){
            if (n === 0) {
                return 1;
            }
            else {
                return n * factorial(n - 1);
            }
        ;}
        result = factorial(document.getElementById("number").value);
        document.getElementById("number").value = result;
    });

})();

//inspiration found here: https://www.geeksforgeeks.org/factorial-of-a-number-using-javascript/