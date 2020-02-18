const RoverSchema = require('./RoverSchema');

test('One Rover', () => {
    const RoverData =  [
        {
            "x":1,
            "y":2,
            "d":"N",
            "moves": "LMLMLMLMM"
        }
    ];

    const Ouput = [];

    RoverData.forEach((ele) => {
        let rover = new RoverSchema(ele.x, ele.y, ele.d, {x:5,y:5});

        ele.moves.split('').forEach((char) => {
            if (char == "M") {
              rover.move();
            } else {
              rover.changeDirection(char)
            }
        });

        Ouput.push({
            x: rover.x,
            y: rover.y,
            d: rover.d
        });
    })
    expect(Ouput).toStrictEqual([ { "x": 1, "y": 3, "d": "N" }]);
});

test('Two Rovers', () => {
    const RoverData =  [
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
    ];

    const Ouput = [];

    RoverData.forEach((ele) => {
        let rover = new RoverSchema(ele.x, ele.y, ele.d, {x:5,y:5});

        ele.moves.split('').forEach((char) => {
            if (char == "M") {
              rover.move();
            } else {
              rover.changeDirection(char)
            }
        });
        Ouput.push({
            x: rover.x,
            y: rover.y,
            d: rover.d
        });
    })
    expect(Ouput).toStrictEqual([ { "x": 1, "y": 3, "d": "N" }, { "x": 5, "y": 1, "d": "E" } ]);
  });
