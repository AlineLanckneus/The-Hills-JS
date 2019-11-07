/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


/*var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};
// https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/


const generateRandomColor = function () {
    
    let hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
        
        shuffle(hex);

        color += hex[0];
        //console.log(color);
    }
    return color;
    
};

document.body.style.backgroundColor = generateRandomColor();
*/

//other way to do it:

//rgb is rgb(0, 0, 0) with each digit ranking 0-255

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = `rgb(${x}, ${y}, ${z})`;
    console.log(bgColor);

    document.body.style.background = bgColor;
    }

document.getElementById("run").addEventListener("click", function(){
    random_bg_color();
})

//no need to add onclick="random_bg_color()" in html button tag
