"use strict"

function RoverSchema(x,y,d,p){
    this.x = x;
    this.y = y;
    this.d = d;
    this.p = p;

    this.checkBounds = function(direction){
      if('+'){
        if(direction+1 > this.p[direction]){
          throw("Out of Bounds +")
        }
      }else{
        if(direction-1 < 0){
          throw("Out of Bounds -")
        }
      }    
    };
    
    this.changeDirection = function(direction){    
          if(direction == "R"){
            switch(this.d) {
                case "N":
                  this.d  = "E"    
                  break;
                case "E":
                  this.d  = "S"   
                  break;
                case "S":
                   this.d  = "W"   
                   break;
                case "W":
                  this.d  = "N"
                  break;
                default:
                  throw("Compass Error R")
              }
          }else if(direction == "L"){
            switch(this.d) {
                case "N":
                  this.d  = "W"  
                  break;
                case "W":
                  this.d  = "S"
                  break;
                case "S":
                  this.d  = "E"
                  break;
                case "E":
                    this.d  = "N"
                  break;
                default:
                  throw("Compass Error L")
              }
          }else{
            throw("Invalid Direction Supplied")
          }
    };

    this.move = function(){
        switch(this.d) {
            case "N":
              if(this.y+1 > this.p.y)
              this.checkBounds(this.y,'+')
              this.y  += 1;    
              break;
            case "E":
              this.checkBounds(this.x,'+')
              this.x  += 1  
              break;
            case "S":
               this.checkBounds(this.y,'-')
               this.y  -= 1;   
               break;
            case "W":
              this.checkBounds(this.x,'-')
              this.x  -= 1;
              break;
            default:
              throw("Movement Error")
        }
    };
}   


module.exports = RoverSchema
