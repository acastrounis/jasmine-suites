'use strict';

var fs = require('fs'),
  xmlParser = require('xml2js').parseString,
  Q = require('Q');

var appRoot = process.cwd();

xdescribe('a suite', function() {

  beforeEach(function() {

  });

  afterEach(function(){

  });

  it('should properly write files', function(){
    fs.writeFile(appRoot + "/logs/testLogs/testLog.txt", "Hey there!", function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("The file was saved!");
      }
    });
  })

  it('should properly read files', function(){
    fs.readFile(appRoot + "/logs/testLogs/ffSample.xml", { encoding: 'utf8', flag: 'r'}, function(err, data) {
      if(err) {
        console.log(err);
      } else {
        console.log("Read file!");
        //console.log(data);
        xmlParser(data, function (err, result) {
          var jsonData = JSON.stringify(result);
          console.log(jsonData);
          console.dir(result);
          //console.log(util.inspect(result, false, null));
        });
      }
    });
  });
});

//Converting between Buffers and JavaScript string objects requires an explicit encoding method
//'ascii'
//'utf8'
//'utf16le'
//'ucs2'
//'base64'
//'binary'
//'hex'