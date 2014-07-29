var appRoot = process.cwd();
var logger = require(appRoot + '/server/util/ff').logger,
  util = require('util'),
  events = require("events");

xdescribe('a suite', function() {
  var obj = { name: 'alex' };
  obj.inspect = function(depth) {
    return '{' + this.name + '}';
  };
  function MyStream() {
    events.EventEmitter.call(this);
  };

  beforeEach(function() {

  });

  afterEach(function(){

  });

  it('should ', function() {
    //Arrange

    //Act
    logger.info(util.format('%s:%s', 'foo'));
    logger.info(util.format('%s:%s', 'foo', 'bar', 'baz'));
    logger.info(util.format(1, 2, 3));
    logger.info(util.inspect(util, { showHidden: true, depth: null }));
    logger.info(util.inspect(obj));
    logger.info(util.isArray([]));
    logger.info(util.isArray(new Array));
    logger.info(util.isArray({}));
    logger.info(util.isRegExp(/some regexp/));
    logger.info(util.isRegExp(new RegExp('another regexp')));
    logger.info(util.isRegExp({}));
    logger.info(util.isDate(new Date()));
    logger.info(util.isDate(Date()));
    logger.info(util.isDate({}));
    logger.info(util.isError(new Error()));
    logger.info(util.isError(new TypeError()));
    logger.info(util.isError({ name: 'Error', message: 'an error occurred' }));
    logger.info(util.inherits(MyStream, events.EventEmitter));
    logger.info();
    logger.info();

    //Assert
  });
});