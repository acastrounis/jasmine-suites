'use strict';

var url = require('url'),
  querystring = require('querystring');

var urlStr = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash',
  urlObj;

var appRoot = process.cwd();

xdescribe('test spec suite', function() {

  beforeEach(function() {

  });

  afterEach(function(){

  });

  it('should properly parse urls', function() {
    urlObj = url.parse(urlStr); //can add true as 2nd param
    console.dir(urlObj);
    var newUrlStr = url.format(urlObj);
    console.log('Reformed url is:')
    console.log(newUrlStr);
    expect(newUrlStr).toEqual(urlStr)
  });

  it('should properly deal with query strings', function() {
    var qryStr = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
    var qryStr2 = querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':');
    expect(qryStr).toEqual('foo=bar&baz=qux&baz=quux&corge=');
    expect(qryStr2).toEqual('foo:bar;baz:qux');

    var parseStr = querystring.parse('foo=bar&baz=qux&baz=quux&corge');
    expect(parseStr).toEqual({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
  });

});