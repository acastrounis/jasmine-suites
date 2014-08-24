'use strict';


var appRoot = process.cwd();

//TODO: Add jasmine-node async and 'done' stuff
//TODO: Add jasmine-node switches and app params
//TODO: Add growl support for notifications

xdescribe("A master jasmine suite", function() {
  describe("A general suite", function() {
    //Suite vars
    var a, b, c, varToReset;

    beforeEach(function(){
      varToReset = 0;
      varToReset += 1;
    });

    afterEach(function(){
      varToReset = 0;
    });

    //Tests
    it("contains spec with an expectation", function() {
      //Arrange
      a = true;
      b = a;
      c = 12;
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      var message = 'foo bar baz';
      var d = {
        foo: 'foo'
      };
      var e = null;
      var foostr = 'foo';
      var f;
      var g = ['foo', 'bar', 'baz'];
      var pi = 3.1415926, eMath = 2.78;

      //Act

      //Assert
      expect(true).toBe(true);
      expect(a).toBe(true);
      expect(a).toBe(b);
      expect(a).not.toBe(null);
      expect(c).toEqual(12);
      expect(foo).toEqual(bar);
      expect(message).toMatch(/bar/);
      expect(message).toMatch('bar');
      expect(message).not.toMatch(/quux/);
      expect(d.foo).toBeDefined();
      expect(d.bar).not.toBeDefined();
      expect(d.foo).not.toBeUndefined();
      expect(d.bar).toBeUndefined();
      expect(null).toBeNull();
      expect(e).toBeNull();
      expect(foostr).not.toBeNull();
      expect(foostr).toBeTruthy();
      expect(f).not.toBeTruthy();
      expect(f).toBeFalsy();
      expect(foostr).not.toBeFalsy();
      expect(g).toContain('bar');
      expect(g).not.toContain('quux');
      expect(eMath).toBeLessThan(pi);
      expect(pi).not.toBeLessThan(eMath);
      expect(pi).toBeGreaterThan(eMath);
      expect(eMath).not.toBeGreaterThan(pi);
      expect(pi).not.toBeCloseTo(eMath, 2);
      expect(pi).toBeCloseTo(eMath, 0);
    });

    it("contains spec with an expectation", function() {
      //Arrange
      var foo = function() {
        return 1 + 2;
      };
      var bar = function() {
        throw 'Exception yo!';
      };

      //Act

      //Assert
      expect(foo).not.toThrow();
      expect(bar).toThrow();
    });

    it("contains spec with an expectation", function() {
      //Arrange

      //Act

      //Assert
    });

    it("contains spec with an expectation", function() {
      //Arrange

      //Act

      //Assert
    });

    it("contains spec with an expectation", function() {
      //Arrange

      //Act

      //Assert
    });

    it("contains spec with an expectation", function() {
      //Arrange

      //Act

      //Assert
    });
  });

  describe('A spy', function() {
    var foo, bar = null;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        }
      };

      spyOn(foo, 'setBar');

      foo.setBar(123);
      foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function() {
      expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks its number of calls", function() {
      expect(foo.setBar.calls.length).toEqual(2);
    });

    it("tracks all the arguments of its calls", function() {
      expect(foo.setBar).toHaveBeenCalledWith(123);
      expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("allows access to the most recent call", function() {
      expect(foo.setBar.mostRecentCall.args[0]).toEqual(456);
    });

    it("allows access to other calls", function() {
      expect(foo.setBar.calls[0].args[0]).toEqual(123);
    });

    it("stops all execution on a function", function() {
      expect(bar).toBeNull();
    });
  });

  describe("A spy, when configured to call through", function() {
    var foo, bar, fetchedBar;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        },
        getBar: function() {
          return bar;
        }
      };

      spyOn(foo, 'getBar').andCallThrough();

      foo.setBar(123);
      fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function() {
      expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", function() {
      expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function() {
      expect(fetchedBar).toEqual(123);
    });
  });

  describe("A spy, when faking a return value", function() {
    var foo, bar, fetchedBar;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        },
        getBar: function() {
          return bar;
        }
      };

      spyOn(foo, 'getBar').andReturn(745);

      foo.setBar(123);
      fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function() {
      expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", function() {
      expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function() {
      expect(fetchedBar).toEqual(745);
    });
  });

  describe("A spy, when faking a return value", function() {
    var foo, bar, fetchedBar;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        },
        getBar: function() {
          return bar;
        }
      };

      spyOn(foo, 'getBar').andCallFake(function() {
        return 1001;
      });

      foo.setBar(123);
      fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function() {
      expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", function() {
      expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function() {
      expect(fetchedBar).toEqual(1001);
    });
  });

  describe("A spy, when created manually", function() {
    var whatAmI;

    beforeEach(function() {
      whatAmI = jasmine.createSpy('whatAmI');

      whatAmI("I", "am", "a", "spy");
    });

    it("is named, which helps in error reporting", function() {
      expect(whatAmI.identity).toEqual('whatAmI');
    });

    it("tracks that the spy was called", function() {
      expect(whatAmI).toHaveBeenCalled();
    });

    it("tracks its number of calls", function() {
      expect(whatAmI.calls.length).toEqual(1);
    });

    it("tracks all the arguments of its calls", function() {
      expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
    });

    it("allows access to the most recent call", function() {
      expect(whatAmI.mostRecentCall.args[0]).toEqual("I");
    });
  });

  describe("Multiple spies, when created manually", function() {
    var tape;

    beforeEach(function() {
      tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

      tape.play();
      tape.pause();
      tape.rewind(0);
    });

    it("creates spies for each requested function", function() {
      expect(tape.play).toBeDefined();
      expect(tape.pause).toBeDefined();
      expect(tape.stop).toBeDefined();
      expect(tape.rewind).toBeDefined();
    });

    it("tracks that the spies were called", function() {
      expect(tape.play).toHaveBeenCalled();
      expect(tape.pause).toHaveBeenCalled();
      expect(tape.rewind).toHaveBeenCalled();
      expect(tape.stop).not.toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function() {
      expect(tape.rewind).toHaveBeenCalledWith(0);
    });
  });

  describe("jasmine.any", function() {
    it("matches any value", function() {
      expect({}).toEqual(jasmine.any(Object));
      expect(12).toEqual(jasmine.any(Number));
    });

    describe("when used with a spy", function() {
      it("is useful for comparing arguments", function() {
        var foo = jasmine.createSpy('foo');
        foo(12, function() {
          return true;
        });

        expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
      });
    });
  });

  describe("Manually ticking the Jasmine Mock Clock", function() {
    var timerCallback;

    beforeEach(function() {
      timerCallback = jasmine.createSpy('timerCallback');
      jasmine.Clock.useMock();
    });

    it("causes a timeout to be called synchronously", function() {
      setTimeout(function() {
        timerCallback();
      }, 100);

      expect(timerCallback).not.toHaveBeenCalled();

      jasmine.Clock.tick(101);

      expect(timerCallback).toHaveBeenCalled();
    });

    it("causes an interval to be called synchronously", function() {
      setInterval(function() {
        timerCallback();
      }, 100);

      expect(timerCallback).not.toHaveBeenCalled();

      jasmine.Clock.tick(101);
      expect(timerCallback.callCount).toEqual(1);

      jasmine.Clock.tick(50);
      expect(timerCallback.callCount).toEqual(1);

      jasmine.Clock.tick(50);
      expect(timerCallback.callCount).toEqual(2);
    });
  });

  describe("Asynchronous specs", function() {
    var value, flag;

    it("should support async execution of test preparation and expectations", function() {

      runs(function() {
        flag = false;
        value = 0;

        setTimeout(function() {
          flag = true;
        }, 500);
      });

      waitsFor(function() {
        value++;
        return flag;
      }, "The Value should be incremented", 750);

      runs(function() {
        expect(value).toBeGreaterThan(0);
      });
    });
  });

  describe("Pending specs", function() {
    xit("can be declared 'xit'", function() {
      expect(true).toBe(false);
    });

    it("can be declared with 'it' but without a function");

    //NOTE: This test is x'd out since pending in a future version
    xit("can be declared by calling 'pending' in the spec body", function() {
      expect(true).toBe(false);
      pending();
    });
  });
});

//NOTE: Jasmine-Node ships now with 1.3 and NOT 2.0 jasmine. Keep an eye out, that will change syntax, etc.




