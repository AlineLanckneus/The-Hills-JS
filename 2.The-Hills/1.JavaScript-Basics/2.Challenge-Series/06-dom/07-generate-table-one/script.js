/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//create elements <table> and <tbody>
var table = document.createElement("table");
var tableBody = document.createElement("tbody");
//declare how many rows and cols you want to create
var rows = 10;
var cols = 1;

function createTable(){

    //creating rows
    for (let i = 0; i <= rows; i++) {
        //var row = document.createElement("tr");
        //using insertRow
        var row = table.insertRow();

        //creating cells
        for (let j = 0; j < cols; j++) {
            //using insertCell()
            //var col = document.createElement("td");
            var col = row.insertCell();
            row.appendChild(col);

        }
        //row added to end of table body
        tableBody.appendChild(row);
    };
    //append the tbody inside the table
    table.appendChild(tableBody);
    //var newTable = table.appendChild(tableBody);
    
    //append the table inside your target element
    document.getElementById("target").appendChild(table);
    table.setAttribute("border", "1");
};

createTable();
