/* jshint unused:false */

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

  static addTwoFractions(x, y){
    var [nX, dX] = x.trim().split('/').map(n=>n*1);
    var [nY, dY] = y.trim().split('/').map(n=>n*1);

    var nX1 = dY * nX;
    var nY1 = dX * nY;

    var numerator = nX1 + nY1;
    var denominator = dX * dY;

    return `${numerator}/${denominator}`;
  }

  static addFractions(...numbers){
    var sum = numbers.reduce((prev,curr)=>Calculator.addTwoFractions(prev,curr), numbers.pop());
    var [n,d] = sum.split('/').map(n=>n*1);
    return lcNumerator(n,d);
  }

}

function lcNumerator(n, d) {
  var denom = lcDenom(n,d);
  var num = ( n / denom );
  return `${num}/${denom}`;
}

function lcDenom(a,b){
  return ( b === 0 ) ? (a):( lcDenom(b, a % b) );
}

module.exports = Calculator;
