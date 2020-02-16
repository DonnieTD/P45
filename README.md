# P45

Get up and running:

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

# Input Object One:

{
  plane: {
     x:0,
     y:0
  }
  rovers: [
	{
		x:1,
		y:2,
		d:"N"
	    moves: "LMLMLMLMM"
	},{
		x:3,
		y:3,
		d:"E"
	    moves: "LMLMLMLMM"
	}
  ]
}
