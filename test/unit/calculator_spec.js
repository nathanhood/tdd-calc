/* global describe, it */

'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function(){
  describe('.add', function(){
    it('should add two numbers', function(){
      var sum = Calculator.add(2,3);
      expect(sum).to.equal(5);
    });
  });

  describe('.subtract', function(){
    it('should find the difference between two numbers', function(){
      var diff = Calculator.subtract(3,2);
      expect(diff).to.equal(1);

      var diff2 = Calculator.subtract(-4,-2);
      expect(diff2).to.equal(-2);
    });
  });

  describe('.pow', function(){
    it('should raise a base to an exponent', function(){
      var exp1 = Calculator.pow(2,0);
      expect(exp1).to.equal(1);

      var exp2 = Calculator.pow(3, 2);
      expect(exp2).to.equal(9);
    });
  });

  describe('.sum', function(){
    it('should produce the sum of all numbers in an array', function(){
      var sum1 = Calculator.sum([2,5,1,9]);
      expect(sum1).to.equal(17);

      var sum2 = Calculator.sum([1,2,3,4,5]);
      expect(sum2).to.equal(15);
    });
  });

  // describe('.comDenom', function(){
  //   it('should find common denominator between array of fractions', function(){
  //     var denominator = Calculator.comDenom(['2/4', '1/8', '3/12']);
  //     expect(denominator).to.equal(24);
  //   });
  // });
});
