'use strict';

var appRoot = process.cwd();
var logger = require(appRoot + '/server/util/ff').logger,
  util = require('util'),
  path = require('path');

xdescribe('a suite', function() {

  beforeEach(function() {

  });

  afterEach(function(){

  });

  it('should ', function() {
    //Arrange

    //Act
    logger.info(path.normalize('/foo/bar//baz/asdf/quux/..'));
    logger.info(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
    logger.info(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));
    logger.info(path.resolve('/foo/bar', './baz'));
    logger.info(path.resolve('/foo/bar', '/tmp/file/'));
    logger.info(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
    logger.info(path.resolve('/foo/bar', './baz'));
    logger.info(path.resolve('/foo/bar', '/tmp/file/'));
    logger.info(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
    logger.info(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));
    logger.info(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
    logger.info(path.dirname('/foo/bar/baz/asdf/quux'));
    logger.info(path.basename('/foo/bar/baz/asdf/quux.html'));
    logger.info(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));
    logger.info(path.extname('index.html'));
    logger.info(path.extname('index.'));
    logger.info(path.extname('index'));
    logger.info('foo/bar/baz'.split(path.sep));
    logger.info(process.env.PATH);
    logger.info(process.env.PATH.split(path.delimiter));

    //Assert
  });
});