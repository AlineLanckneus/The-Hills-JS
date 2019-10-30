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

const startsWithThe = title => title.startsWith(`the`);

const createList = movies => {
  return `
    <ol>${movies
      .map(movie => movie.toLowerCase())
      .filter(startsWithThe)
      .map(movie => wrapWithTag(movie, `li`))
      .join(``)}
    </ol>`;
};

console.log(movies);
document.write(createList(movies));
console.log(movies);

  /* in this example the filter method is used on the movies array
  after toLowerCase has been applied,
  filter will go over each array item and only choose the ones that result in 'true'
  to make a new array with only movie titles that start with 'the'
  another map method is chained on this new array consisting of 3 elements
  each of these elements are wrapped in a <li> tag

  */