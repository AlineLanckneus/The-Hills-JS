# READ IT
## EX 08
* Look at the documentation of the join() function. Explain how it is used here.

The join() method creates and returns a new string (!) by concatenating all of the elements in an array (or an array-like object), separated by commas (default, if you don't specify a separator) or a specified separator string. If the array has only one item, then that item will be returned without using the separator.


var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); --> default is comma
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

console.log(elements.join('+'));
// expected output: "Fire+Air+Water"

so input = array or array-like object and result is a string