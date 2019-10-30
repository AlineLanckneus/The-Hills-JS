# READ IT
## EX 04
* Open script.js and read the code. What do you think will happen. Try to explain in your own words.

//
const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

document.write(`<ol>`);

for (let i = 0; i < movies.length; i++) {
  document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ol>`);

const movies is an array of 10 movies

the for loop will iterate through each element in this array and write it to the document stream.
This will be displayed in an ordered list.
use of template literals in the document.write statements