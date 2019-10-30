# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
* Look at the documentation of for...in

//
The for/in statement loops through the properties of an object.

The block of code inside the loop will be executed once for each property.

JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
**for/in - loops through the properties of an object**
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - loops through a block of code once, and then repeats the loop while a specified condition is true
Note: Do not use the for/in statement to loop through arrays where index order is important. Use the for statement instead.

for (var in object) {
  code block to be executed
}
var:	Required. A variable that iterates over the properties of an object
object:	Required. The specified object that will be iterated

//

* Look at the documentation of the .sort(à function. Explain how it's applied here.

//
The sort() method sorts the items of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By default, the sort() method sorts the values as strings in alphabetical and ascending order.

This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce an incorrect result when sorting numbers.

Note: This method changes the original array.

//
* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?
//? haven't figured this one out yet