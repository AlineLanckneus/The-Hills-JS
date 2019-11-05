
let listOscarWinners = [
    {
        actor: "Forest Whitaker",
        film: "The Last King of Scotland",
        age: 45
    }, {
        actor: "Daniel Day-Lewis",
        film: "There Will Be Blood",
        age: 50
    }, {
        actor: "Sean Penn",
        film: "Milk",
        age: 48
    }, {
        actor: "Jeff Bridges",
        film: "Crazy Heart",
        age: 60
    }, {
        actor: "Colin Firth",
        film: "The King's Speech",
        age: 50
    }, {
        actor: "Jean Dujardin",
        film: "The Artist",
        age: 39
    }, {
        actor: "Daniel Day-Lewis",
        film: "Lincoln",
        age: 55
    }, {
        actor: "Matthew McConaughey",
        film: "Dallas Buyers Club",
        age: 44
    }, {
        actor: "Eddie Redmayne",
        film: "The Theory of Everything",
        age: 33
    }, {
        actor: "Leonardo DiCaprio",
        film: "The Revenant",
        age: 41
    }
];


listOscarWinners.forEach((prop) => console.log(prop.actor));

//listOscarWinners.forEach((prop) => document.write(`<ul><li>${prop.actor}</li></ul>`));

document.write(`<ol>`);
for (i = 0; i < listOscarWinners.length; i++) {
    document.write(`<li>${listOscarWinners[i]['actor']}</li>`);
}
document.write(`</ol>`);


document.write(`<h1>Sorted by age</h1>`);


listOscarWinners.sort((a, b) => {
    if (a['age'] > b['age']) {
        return 1
    } else {
        return -1
    }
});

document.write(`<ol>`);
for (i = 0; i < listOscarWinners.length; i++) {
    document.write(`<li>${listOscarWinners[i]['actor']}</li>`);
}
document.write(`</ol>`);

let total = 0;
listOscarWinners.forEach(prop => total += prop['age']);
console.log(total);