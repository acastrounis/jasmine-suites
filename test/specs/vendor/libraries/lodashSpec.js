'use strict';

var appRoot = process.cwd(),
  _ = require('lodash'),
  logger = require(appRoot + '/server/util/ff').logger,
  data = require(appRoot + '/test/baseTestData');

describe('a suite for lodash/underscore', function() {
  var arrayFalsey, arrayTruthy, arrayPrimitives, arrayUnion, arrayNums, characters;

  beforeEach(function() {
    arrayFalsey = data.arrayFalsey,
    arrayTruthy = data.arrayTruthy,
    arrayPrimitives = data.arrayPrimitives,
    arrayUnion = data.arrayUnion,
    arrayNums = data.arrayNums,
    characters = data.characters;
  });

  afterEach(function(){

  });

  it('should ', function() {
  });

  describe('a suite of array methods', function() {
    beforeEach(function() {

    });

    afterEach(function(){

    });

    it('should ', function() {
      expect(_.compact(arrayFalsey)).toEqual([]);
      expect(_.difference(arrayPrimitives, arrayNums)).toEqual([]);
      expect(_.findIndex(characters, { 'age': 36 })).toEqual(-1);
      expect(_.findLastIndex(arrayNums, function(val){return val == 3})).toEqual(-1);
      expect(_.first(characters, 'blocked')).toEqual([]);
      expect(_.flatten(characters, 'pets')).toEqual([]);
      expect(_.indexOf([1, 2, 3, 1, 2, 3], 2, 3)).toEqual(4);
    });
  });

  describe('a suite of chaining methods', function() {

    beforeEach(function() {

    });

    afterEach(function(){

    });

    it('should ', function() {
    });
  });

  describe('a suite of collection methods', function() {

    beforeEach(function() {

    });

    afterEach(function(){

    });

    it('should ', function() {
    });
  });

  describe('a suite of function methods', function() {

    beforeEach(function() {

    });

    afterEach(function(){

    });

    it('should ', function() {
    });
  });

  describe('a suite of object methods', function() {

    beforeEach(function() {

    });

    afterEach(function(){

    });

    it('should ', function() {
    });
  });

  describe('a suite of utilities methods', function() {

    beforeEach(function() {

    });

    afterEach(function(){

    });

    it('should ', function() {
    });
  });

  describe('a suite of properties methods', function() {

    beforeEach(function() {

    });

    afterEach(function(){

    });

    it('should ', function() {
    });
  });
});