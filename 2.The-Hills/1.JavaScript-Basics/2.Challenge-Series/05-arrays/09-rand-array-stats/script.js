/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//let randomNumber = Math.floor(Math.random()*101);

let maxLength = 100;

//console.log(randomNumber);

function random(){ 
    return Math.floor(Math.random()*101);
}

function table(){
    for (let i = 1; i < maxLength; i++) {
        number = "cell" + i;
        document.getElementById(number).innerHTML = random();
        
    }
}

document.getElementById("run").addEventListener("click", function(){
    table();
});