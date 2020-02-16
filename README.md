# P45

Get up and running:

I decided to create a fake email and atlas acount so that you can have access to everything and for ease of use

# Notes:

A lot of hints ( I think ) are given :

- Test it
- Document everything ( ala this readme )
- Remembering to allow more than one rover is mentioned twice ... Guess we shouldn't forget that xD
- Should it run on the CL ? NO ... She will be an api
 
# Instructions:

For instructions as with most code tests the real beef is in the I/O example:

Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Expected Output:

1 3 N

5 1 E

# Thoughts:

So the entities I see are Rovers and a Plane:

The plane is a normal x/y plane with only the initial x/y co-ords where x is the upper bound of the plane in x, and y is the same for y.
The lower bounds are both 0;

So :

function makePlane(x,y){
   return {
       x,
       y
   }
};

The rover:

// where d will track our direction
function deployRover(x,y,d){
    x,
    y,
    d
}

Routes: 

/rovers // post input to here
       // it gives back the expected output
       
So i wanted to make it kind of like a game but I do recognize that going with an API might be out of scope already....

So for the front end we will just have a form for the input and a display area for the output :) 
