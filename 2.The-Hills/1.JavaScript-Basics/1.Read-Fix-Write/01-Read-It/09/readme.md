# READ IT
## EX 09
* Notice how the 2 map functions are attached to eachother, this is called 'method chaining'

* What does the parseTitle function do exactly?

//parseTitle takes in one parameter 'title'
the function starts off with converting whatever argument is given
for title to lowercase with the built in toLowerCase method

then there's a conditional if loop:
if the argument given for title starts with 'the' (notice not The)
it will log to the console the following message:
Film met THE: title of movie (in lowercase)

after this title is converted to all uppercase with the built in toUpperCase method; 

outside of this if loop return is used to return any title that
doesn't start with the


// createList takes in one parameter called movies

the function returns an ordered list w/
the use of template literals
first: map is used on the movies array;
the function applied to each item in the movies array is parseTitle
this function is chained to another map method that
will apply the wrapwithtag function on every item in this newly created array (map creates new arrays!)
finally join is chained 
the end result is written to the document stream

* Notice how all the code is in the shape of functions.