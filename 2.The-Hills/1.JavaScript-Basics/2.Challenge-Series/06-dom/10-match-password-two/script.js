/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function compare(){
    var one = String(document.getElementById("pass-one").value);
    var two = String(document.getElementById("pass-two").value);

    if(one !== two){
        document.getElementById("pass-one").className = "error";
        document.getElementById("pass-two").className = "error";
    } else {
        console.log("succes!");
    }
};

document.getElementById("run").addEventListener("click", function(){
    compare();
});