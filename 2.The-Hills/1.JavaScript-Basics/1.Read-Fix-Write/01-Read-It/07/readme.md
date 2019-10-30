# READ IT
## EX 07
* Look at the documentation of the map() function
* What's the difference between this and the previous exercise?

//The map() method **creates a new array** with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, **in order**.

Note: map() does not execute the function for array elements without values.

Note: this method does not change the original array.

In this example first the map method is called upon to create a new array based on movies
It will perform the lowercase method on each item in this array.

Next we use foreach again to again get an ordered list with the movies