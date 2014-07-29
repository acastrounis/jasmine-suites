'use strict';

var appRoot = process.cwd();
var logger = require(appRoot + '/server/util/ff').logger,
  util = require('util');

xdescribe('a suite', function() {

  beforeEach(function() {

  });

  afterEach(function(){

  });

  it('should ', function() {
    //Arrange

    //Act
    logger.warn('Server details:');
    logger.info('process.env:');
    logger.dir(process.env); //Represents OS environment variables, can add to (like: export NODE_ENV=development on mac/linux)
    logger.info('Version: ' + process.version);
    logger.info('This process is pid ' + process.pid);
    logger.info('Process title: ' + process.pid);
    logger.info('This processor architecture is ' + process.arch);
    logger.info('This platform is ' + process.platform);
    logger.info(util.inspect(process.memoryUsage()));
    console.dir(process.versions);
    console.dir(process.config);
    logger.info(process.execPath);
    logger.info(process.execArgv);
    logger.info(process.cwd());
    logger.info(process.getgid());
    logger.info(process.getuid());
    process.argv.forEach(function(val, index, array) {
      logger.info(index + ': ' + val);
    });

    //Assert
  });
});