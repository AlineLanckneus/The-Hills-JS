# READ IT
## Excercise 05
* The for-loop is no longer present. 
  What was it replaced with? How does this work?

    // it is replaced with a foreach loop used with arrays //

    // parseTitle takes in one parameter (argument?) which is "title"
    next the function lowerTitle will convert whatever is given as an argument
    for title to all lowercase
    next the function wrapped refers to another function above called wrapWithTag
    that takes in two (parameters?) content and tagname and returns
    a template literal of content in between two tagnames.
    once all of that is done parseTitle will write to the document stream the result
    of wrapped //

    // the forEach will go over the array movies and
    perform the parseTitle function for each item in it (movie)
    and display this as a list item in an ordered list

* What does the function 'parseTitle' do? 
  What parameter do we pass to this function?
* What does the function 'wrapWithTag' do? 
  Why are the parameters placed between brackets?
    //they are template literals

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

const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};

const parseTitle = title => {
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapWithTag(lowerTitle, `li`);
  document.write(wrapped);
};

document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);
