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

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

  /*wrapWithTag is written in simplified version, the word return can be left out in this case
  result will stay the same
  this is an arrow function */

document.write(`<ol>`);
movies.forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));
document.write(`</ol>`);

  /* this forEach loop will iterate over each item in movies,
  one item being = movie
  document.write calls the wrapwithtag function above with two arguments being
  movie and `li`. tolowercase is a built in js method.
  the result should be the same as in ex05; this is just a simplified version
  */ 