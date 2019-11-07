/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//document.getElementById("target").innerHTML = "Hi";

//console.log(h);

const greeting = function(){ 

    let d = new Date();
    let h = d.getHours(); //(0-24)
    //let target = document.getElementById("target").innerHTML;

        if(h <= 18){
            document.getElementById("target").innerHTML = "Hello";
        } else if(h > 18 && h < 24) {
            document.getElementById("target").innerHTML = "Good evening";
        }
    };//end of greeting function

greeting();