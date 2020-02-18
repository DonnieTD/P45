# P45

Get up and running:

Open up the server file in bash: <br/>
	npm install<br/>
	npm run start
	
Open up client:<br/>
	npm install<br/>
	npm run start
	
And off we go :)

To test run this in the respective folder ( client/server ) :<br/>
	npm run test

# I have noticed a weirdness around git bash and jest tests when it's a fresh clone, but they work when I use the very same bash terminal integrated into my ide.. Tested in cmd and it works everytime ( if this was to happen)



# Notes:

- Test 
- Document 
- Remembering to allow more than one rover is mentioned twice ... Guess we shouldn't forget that xD
- Should it run on the CL ? 
	
	NO ... 
	
	She will be an Express Api with a react front end.
 	We will use React Bootstrap because of time
	Styling the components on my own would be better if it was possible
	For testing we'll do snapshots with (react-test-renderer) on the front end  since this is by far the part I know the least about 	 but I do want to include some sort of testing on the front end.
	On the back end we'll unit test the one piece of business logic with jest 
	We'll use axios for requests
	The last package is our express cors package
	
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

# Input Object:

{
  "plane": {
     "x":5,
     "y":5
  },
  "rovers": [
	{
		"x":1,
		"y":2,
		"d":"N",
	        "moves": "LMLMLMLMM"
	},{
		"x":3,
		"y":3,
	 	"d":"E",
	        "moves": "MMRMMRMRRM"
	}
  ]
}

# Expected Output :
[ { "x": 1, "y": 3, "d": "N" }, { "x": 5, "y": 1, "d": "E" } ]

# Routes
	Get:
	/ Just to say hello
	Post:
	/Rover ( using the input object as described above)
	
	
