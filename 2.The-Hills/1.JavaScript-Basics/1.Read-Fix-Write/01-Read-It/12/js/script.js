const movies = [
  {
    title: `The Godfather`,
    year: 1972,
    director: `Francis Ford Coppola`,
  }, {
    title: `The Shawshank Redemption`,
    year: 1994,
    director: `Frank Darabont`,
  }, {
    title: `Schindler's List`,
    year: 1993,
    director: `Steven Spielberg`,
  }, {
    title: `Raging Bull`,
    year: 1980,
    director: `Martin Scorsese`,
  }, {
    title: `Casablanca`,
    year: 1942,
    director: `Michael Curtiz`,
  }, {
    title: `Citizen Kane`,
    year: 1941,
    director: `Orson Welles`,
  }, {
    title: `Gone with the Wind`,
    year: 1939,
    director: `Victor Fleming`,
  }, {
    title: `The Wizard of Oz`,
    year: 1939,
    director: `Victor Fleming`,
  }, {
    title: `One Flew Over the Cuckoo's Nest`,
    year: 1975,
    director: `Milos Forman`,
  }, {
    title: `Lawrence of Arabia`,
    year: 1962,
    director: `David Lean`,
  },
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const parseMovieData = movie =>
  wrapWithTag(movie.title, `p`) +
  wrapWithTag(movie.year, `p`) +
  wrapWithTag(movie.director, `p`);

  /*
  Return is used to pass something out of the function to the code that called it 
  (generally speaking). Therefore in a function that doesn't need to pass anything back, such as removeEvent which is simply modifying the state of something else, it's not necessary.
  
  You only need to declare return when you want the function to have an actual return value, whether it be a string, boolean, object, function, etc. If the function operates on something else, like adding an event handler or adding properties to something else, the return value is not needed. 
  You could return this to be able to chain the method.
  */


const createList = movies => {
  return `<ul>${movies
    .map(movie => wrapWithTag(parseMovieData(movie), `li`))
    .join(``)
  }</ul>`;
};

document.write(createList(movies));

/*parseMovieData is wrapping each property-value  (title, year and director) of the movies object
in <p> tags 
createList is then wrapping each of these in <li> tags
creating an unordered list */