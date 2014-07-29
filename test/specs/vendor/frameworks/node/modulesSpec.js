var appRoot = process.cwd();
var logger = require(appRoot + '/server/util/ff').logger,
  util = require('util');

xdescribe('a suite', function() {

  beforeEach(function() {

  });

  afterEach(function(){

  });

  //TODO: Add tests for different ways to create modules

  it('should ', function() {
    //Arrange

    //Act
    //Inspect node module object
    logger.info(util.inspect(require('util'), { showHidden: true, depth: null }));

    //Assert
  });
});

//modules.exports = exports = someName = ({}, or function, or constructor);
//Each property of the returned type can be a primitive, or object, or function, etc.

//Can also do:
//exports.a;
//exports.b;
//...
//exports.n;

//NOTE: Initially, exports = module.exports, but this is completely overwritten if exports is set to anything else

//If needing to track state, use constructor, and choose singleton or instance constructor if applicable