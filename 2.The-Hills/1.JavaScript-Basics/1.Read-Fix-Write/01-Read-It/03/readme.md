# READ IT
## EX 03
* Open script.js and try to predict the result of the script. Explain.
* Open the developer tools in your browser and inspect the 'console' tab.


//
const amount = 10; //declaration and assignment of 10 to variable called amount

for (let i = 0; i < amount; i++) {
  console.log(i);
  document.write(`<p>${i + 1}</p>`);
}

//this for loop will loop through 0 to 9 and console log i and
write to the document stream enclosed in a paragraph the addition of i and 1.
So the numbers 1 to 10 will be displayed

let i = 0 --> starting condition
i < amount (=10) --> end condition, as long as this is true, the loop will continue
i++ --> after each iteration 1 is added to i