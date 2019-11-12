/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var tbl = document.createElement("table");
var tbody = document.createElement("tbody");
var rows = 11;
var cols = 11;
var output;

function tableCreate(){

    for (let i = 1; i < rows; i++) {
        var row = tbl.insertRow();
        
        for (let j = 1; j < cols; j++) {
            
            var col = row.insertCell();
            col.innerHTML =  i * j;
            row.appendChild(col);
        }
        tbody.appendChild(row);
    };
    tbl.appendChild(tbody);
    document.getElementById("target").appendChild(tbl);
    
};

tableCreate();
