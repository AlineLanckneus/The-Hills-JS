/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//console.log(d);
//console.log(currentYear);

const ageCalc = function () {
    let Bday = document.getElementById("dob-day").value;
    let Bmonth = document.getElementById("dob-month").value;
    console.log(Bmonth);
    let Bdate = document.getElementById("dob-year").value;

    let d = new Date();
    let currentYear = d.getFullYear();
    let currentMonth = d.getMonth();
    console.log(currentMonth);
    console.log(typeof currentMonth);
    let currentDay = d.getUTCDay();
    let age; 
    let age2;

    if(currentMonth > Bmonth){ 
        age = (currentYear - Bdate);
    alert(`Your birthdate is ${Bday}/${Bmonth}/${Bdate}. That makes you ${age} years old!`);
    } else if(currentMonth < Bmonth){
        age2 = ((currentYear - Bdate) - 1); 
        alert(`Your birthdate is ${Bday}/${Bmonth}/${Bdate}. That makes you ${age2} years old!`);
    }

    
};

document.getElementById("run").addEventListener("click", function(){
    ageCalc();
})