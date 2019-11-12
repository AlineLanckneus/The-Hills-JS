/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function compare(){

    var pw1 = String(document.getElementById("pass-one").value);
    var pw2 = String(document.getElementById("pass-two").value);

    if(pw1 !== pw2){
        console.log("nope");
        document.getElementById("pass-one").style.borderColor= "red";
        document.getElementById("pass-two").style.borderColor= "red";
    } else {
        console.log("well done");
        document.getElementById("pass-one").style.borderColor= "green";
        document.getElementById("pass-two").style.borderColor= "green";
    }
}


document.getElementById("run").addEventListener("click", function(){
    compare();
});