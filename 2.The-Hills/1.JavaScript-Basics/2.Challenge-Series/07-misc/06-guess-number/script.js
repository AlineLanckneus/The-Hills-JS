/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let randomNum = Math.floor(Math.random()*101);

document.body.onload = function(){

    for (let i = 0; i < 10; i++) {
        
        console.log(randomNum);
        let userNum = prompt("Pick a number between 1 and 100!");
        console.log(userNum);
        if(userNum == randomNum){
            alert("You guessed the same number whuuut!")
        } else if(userNum !== null && userNum < randomNum) {
            alert("Higher!");
            userNum;
        } else if(userNum !== null && userNum > randomNum){
            alert("Lower!");
            userNum;
        }
    }
    
};