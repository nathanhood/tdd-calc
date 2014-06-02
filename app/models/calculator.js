'use strict';

class Calculator{
  static add(x, y){
    return x + y;
  }

  static subtract(x, y){
    return x - y;
  }

  static pow(x, y){
    return Math.pow(x,y);
  }

  static sum(x){
    var result = 0;
    x.map(n=>result += n);
    return result;
  }

  // static comDenom(x){
  //   var denoms = x.map(n=>n.split('/')).map(n=>n[1] * 1).sort((a,b)=>b-a);
  //
  //   var output = [];
  //   var i = 1;
  //
  //   while(denoms.length === output.length){
  //     for(var j = 0; j < denoms.length; i++){
  //       var remainder = (denoms[0] * i) % denoms[j];
  //       if(!remainder){
  //         output.push(denoms[j]);
  //       }
  //     }
  //     if(denoms.length === output.length)
  //   }
  //
  //   console.log(denoms);
  // }


}

module.exports = Calculator;
