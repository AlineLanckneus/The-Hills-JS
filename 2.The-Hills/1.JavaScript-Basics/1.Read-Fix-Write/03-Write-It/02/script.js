let movies = ['Hors Normes', 'The Mustang', 'Joker', 'Downton Abbey', 'Parasite', 'La Ragazza Nella Nebbia', 'Once upon a time in Hollywood', 'Au nom de la terre', 'Itzhak', 'Everest: de jonge yeti', 'Miniscule 2', 'The Lion King'];

movies.reverse();

for (let index = 0; index < movies.length; index++) {
    
    const movie = movies[index].toLocaleLowerCase();
    
    document.write(`<ul><li>${movie}</li></ul>`)
};

