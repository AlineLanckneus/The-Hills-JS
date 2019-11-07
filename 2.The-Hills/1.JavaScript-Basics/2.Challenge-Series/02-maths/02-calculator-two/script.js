/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



// let add = document.getElementById("addition");
// let sub = document.getElementById("substraction");
// let mul = document.getElementById("multiplication");
// let div = document.getElementById("division");
(function(){

const a = parseInt(document.getElementById("op-one").value);
const b = parseInt(document.getElementById("op-two").value);


const calculator = function (op) {
        switch (op) {

            case "addition": console.log(a + b);
                
                break;
            case "substraction": console.log(a - b);
                
                break;
            case "multiplication": console.log(a * b);
                
                break;
            case "division": console.log(a / b);
                
                break;
        
            default: console.log("fail");
            
        }
};

Array.from(document.querySelectorAll("button.operator")).forEach(function(op2){
    op2.addEventListener("click", function(){
        calculator(this.id);
        console.log(this.id);
    })
});

})();