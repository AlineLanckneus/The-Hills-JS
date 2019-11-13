/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

var slider = document.getElementById("slider");
slider.onchange = function showSliderValue(){ //need an eventlistener to be able to update the output whenever range input is changed
    //without event listener function would only execute once at startup
var sliderValue = document.getElementById("slider").value;
document.getElementById("target").innerHTML = `0${sliderValue}`;
console.log(sliderValue);
};

showSliderValue();