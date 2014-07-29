//jasmine.getEnv().defaultTimeoutInterval = 10000; //ms

var appRoot = process.cwd(),
    Q = require('q'),
    fs = require('fs'),
    util = require('util'),
    xmlParser = require('xml2js').parseString,
    _ = require('lodash');

Q.longStackSupport = true;

describe("A suite to explore basic usage of JavaScript promises using Q", function () {
	//Function declarations
	function plainSquare(num) {
		return num * num;
	}

	function sleep(ms) {
		//Simulates long running process (event loop blocking)
		return function (callback) {
			setTimeout(callback, ms);
		};
	};

	function square(num) {
		//Simple math square function using promise deferreds
		var deferred = Q.defer();
		if (typeof num === "string") {
			deferred.reject(num);
		} else {
			//Call long running process (e.g. function with asynchronous callback)
			sleep(100).call(this, function () {
				deferred.resolve(num * num);
			});
		}
		return deferred.promise;
	};

	function getSquareFunction() {
		var deferred = Q.defer();
		deferred.resolve(function (num) {
			return num * num;
		});
		return deferred.promise;
	};

	//PROMISE CREATION & BASIC USAGE
	describe("A suite for promise creation and basic usage", function () {

		//REMEMBER BASIC TEMPLATE
		//promise.then(onFulfilled, onRejected, onProgress)
		//Core promise methods: then, catch, progress, finally, done 

		it("demonstrates simple promise creation", function (done) {
			var promise = Q();
			promise.then(function (result) {
				expect(result).toBeUndefined();
				expect(promise.isFulfilled()).toBeTruthy();

				var numSquared = plainSquare(10);
				expect(numSquared).toEqual(100);
				done();
			});
		});

		it("demonstrates promise creation and value fulfillment", function (done) {
			Q(9999).then(function (result) {
				expect(result).toEqual(9999);
				//expect(result).toEqual(5);
					done();
				});
		});

		it("demonstrates promise creation and rejection", function (done) {
			Q(new Error("This is my custom error, yay!")).then(function (result) {
				expect(result.name).toEqual("Error");
				expect(result.message).toEqual("This is my custom error, yay!");
				//expect(result.name).toEqual("This is totally the wrong error!");
				done();
			});
		});

		it("demonstrates promise creation and rejection using Q.reject", function (done) {
			Q.reject("This is my custom error, yay!").then(null, function (error) {
				expect("This is my custom error, yay!").toEqual("This is my custom error, yay!");
				done();
			});
		});

		it("demonstrates promise creation and error handling", function (done) {
			//Demonstrates error handling improvement over callbacks
			Q().then(function (result) {
				throw new Error("This is my custom error, yay!");
			})
			.catch(function (error) {
				expect(error.name).toEqual("Error");
				expect(error.message).toEqual("This is my custom error, yay!");
				done();
			});
		});

		it("demonstrates using 'when' with promise", function (done) {
			//Equivalent to square(10).then(onFulfilled)
			Q.when(square(10), function (total) {
				expect(total).toEqual(100);
				done();
			});
		});

		it("demonstrates using 'when' with non-promise (value in this case)", function (done) {
			//Equivalent to Q(100).then(onFulfilled)
			Q.when(100, function (total) {
				expect(total).toEqual(100);
				done();
			});
		});

	});

	//PROMISE FEATURES
	describe("A suite to explore promise features", function() {

		it("demonstrates function call returning a promise and success (onFulfilled)", function(done) {
			square(10).then(function(total) {
				expect(total).toEqual(100);
				done();
			});
		});

		it("demonstrates rejection using deferreds", function(done) {
			//Call to square will cause deferred rejection since passing a string
			//Error handling via catch method on promise object
			square("This will fail").then(function(result) {
					console.log("We won't reach this code!");
				})
				.catch(function(error) {
					expect(error).toEqual("This will fail");
					done();
				});
		});

		it("demonstrates rejection using onFulfilled and onRejected", function(done) {
			//Call to square will cause deferred rejection since passing a string
			//Error handling via onRejected
			square("This will fail").then(function(result) {
				console.log("We won't reach this code!");
			}, function(error) {
				expect(error).toEqual("This will fail");
				done();
			});
		});

		it("demonstrates promise chaining", function(done) {
			square(10).then(square)
				.then(square)
				.then(function(total) {
					expect(total).toEqual(100000000);
					done();
				});
		});

		it("demonstrates transformation and chaining", function (done) {
			square(10).then(function(result) {
					//Transform result data and continue chaining
					var transformedData = result / 2;
					return Q(transformedData);
				})
				.then(square)
				.then(function (total) {
					expect(total).toEqual(2500);
					done();
				});
		});

		it("demonstrates promise-for-function methods", function(done) {
			getSquareFunction().fcall(10).then(function(result) {
				expect(result).toEqual(100);
				done();
			});
		});

		it("demonstrates promise-for-function methods", function(done) {
			getSquareFunction().fapply([10]).then(function(result) {
				expect(result).toEqual(100);
				done();
			});
		});

		it("demonstrates concurrent function calls with fulfillment", function(done) {
			//Processing of results will not proceed until all concurrent operations are fulfilled or rejected
			//Results will be either array of fulfilled values, or rejection reason for first promise to be rejected
			Q.all([
				square(10),
				square(20)
			]).then(function (results) {
				expect(results[0]).toEqual(100);
				expect(results[1]).toEqual(400);

				done();
			});
		});

		it("demonstrates concurrent function calls with rejection", function (done) {
			//Same as above but with rejections
			Q.all([
				square("This will fail first"),
				square("This will fail second")
			]).then(null, function (error) {
				expect(error).toEqual("This will fail first");
				//expect(error).toEqual("This will fail second"); //This will fail

				done();
			});
		});

		it("demonstrates concurrent function calls, chaining, and rejection", function (done) {
			//Processing of results will not proceed until all concurrent operations are fulfilled or rejected
			Q.allSettled([
					square(10),
					square(20),
					square(30),
					square("This will fail")
			]).then(function (results) {
				expect(results[0].value).toEqual(100);
				expect(results[0].state).toEqual("fulfilled");

				expect(results[1].value).toEqual(400);
				expect(results[1].state).toEqual("fulfilled");

				expect(results[2].value).toEqual(900);
				expect(results[2].state).toEqual("fulfilled");

				expect(results[3].reason).toEqual("This will fail");
				expect(results[3].state).toEqual("rejected");

				done();
			});
		});
	});
});

describe("A suite to explore advanced usage of JavaScript promises using Q", function () {
    var deferred, inspect, value, error, dataObject;

    beforeEach(function () {
        inspect = false;
        deferred = Q.defer();
        dataObject = {
            propName: "propVal",
            func: function (val) {
                return val
            }
        }
    });

    afterEach(function () {
        deferred = null;
        value = null;
        error = null;
    });

    it('should demonstrate the use of deferred promises', function () {
        var deferred = Q.defer();
        fs.readFile(appRoot + "/test/helpers/files/testFile.txt", { encoding: 'utf8', flag: 'r'}, function (error, text) {
            if (error) {
                deferred.reject(new Error(error));
            } else {
                deferred.resolve(text);
            }
        });
        expect(deferred.promise).toBeDefined();
        expect(deferred.promise.then(null, function (val) {
            return val
        })).toBeDefined();
    });

    describe('a suite for nodeback alternatives', function () {
        it('should successfully demonstrate nodeback alternatives', function (done) {
            var readFile = Q.denodeify(fs.readFile);
            readFile(appRoot + "/test/helpers/files/testLog.txt", { encoding: 'utf8', flag: 'r'})
                .then(function (text) {
                    expect(text).toBeDefined();
                }, null).done();

            var readFile = Q.denodeify(fs.readFile);
            readFile(appRoot + "/test/helpers/files/testLogX.txt", { encoding: 'utf8', flag: 'r'})
                .then(null,function (err) {
                    expect(err.name).toEqual("Error");
                    expect(err.message).toEqual("ENOENT, open '/Users/Dev/SourceCode/fantasy/logs/testLogs/testLogXXX.txt'");
                }).done();

            var deferred = Q.defer();
            fs.readFile(appRoot + "/test/helpers/files/testLog.txt", { encoding: 'utf8', flag: 'r'}, deferred.makeNodeResolver())
            deferred.promise.then(function (text) {
                expect(text).toBeDefined();
            }, null).done();

            var deferred = Q.defer();
            fs.readFile(appRoot + "/test/helpers/files/testLogX.txt", { encoding: 'utf8', flag: 'r'}, deferred.makeNodeResolver())
            deferred.promise.then(null,function (err) {
                expect(err.name).toEqual("Error");
                expect(err.message).toEqual("ENOENT, open '/Users/Dev/SourceCode/fantasy/logs/testLogs/testLogXXX.txt'");
            }).done();

            Q.nfapply(fs.readFile, [appRoot + "/test/helpers/files/testLog.txt", { encoding: 'utf8', flag: 'r'}])
                .then(function (text) {
                    expect(text).toBeDefined();
                }, null).done();

            Q.nfcall(fs.readFile, appRoot + "/test/helpers/files/testLog.txt", { encoding: 'utf8', flag: 'r'})
                .then(function (text) {
                    expect(text).toBeDefined();
                }, null).done();

            done();
        });
    });

    describe('a suite for checking for promises', function () {
        it('should check for Q/promise types and inspect all', function (done) {
            expect(typeof Q).toEqual('function');
            expect(typeof Q()).toEqual('object');
            if (inspect) {
                logger.info(util.inspect(Q, { showHidden: true, depth: null }));
                logger.info(util.inspect(Q(), { showHidden: true, depth: null }));
                logger.inspect(Q, true, null);
                logger.inspect(Q(), true, null);
            }
            done();
        });

        it('should demonstrate Q.isPromise', function (done) {
            //NOTE: This checks if Q promise specifically
            expect(Q.isPromise(true)).toBeFalsy();
            expect(Q.isPromise(Q(999))).toBeTruthy();
            done();
        });

        it('should demonstrate Q.isPromiseAlike', function (done) {
            //NOTE: This checks if a promise (i.e., that has a then function)
            expect(Q.isPromiseAlike(true)).toBeFalsy();
            expect(Q.isPromiseAlike(Q(999))).toBeTruthy();
            done();
        });

        it('should demonstrate Q.promised', function (done) {
            var func = function(val){
                return val;
            };
            var promisedFunc = Q.promised(func);
            promisedFunc(999).then(function(val){
                expect(val).toEqual(999);
                done();
            });

            promisedFunc(Q(999)).then(function(val){
                expect(val).toEqual(999);
                done();
            });
        });

    });

});

