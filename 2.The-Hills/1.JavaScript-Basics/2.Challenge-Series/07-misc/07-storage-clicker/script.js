/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    var i = 0;
    function counter()
    {
        document.getElementById("target").innerHTML = ++i;
    };

    localStorage.setItem("count", "i");
    
    document.getElementById("increment").addEventListener("click", function(){
    counter();
    });