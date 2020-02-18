var express = require('express')
var router = express.Router()

const RoverSchema = require('./RoverSchema')

router.post('/', function (req, res) {
  try {    
   const Ouput = [];
   if (req.body.rovers.length >= 1) {
      req.body.rovers.forEach((ele) => {
        let rover = new RoverSchema(ele.x, ele.y, ele.d, req.body.plane);

        ele.moves.split('').forEach((char) => {
            if (char == "M") {
              rover.move();
            } else {
              rover.changeDirection(char)
            }
        });
        delete rover.p;
        Ouput.push(rover);
      })

      res.status(200).send(Ouput)
    } else {
      throw ("INVALID INPUT: NO ROVER SUPPLIED")
    }
  } catch (e) {
    res.status(400).send(e)
  }
});

module.exports = router